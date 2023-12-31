import { logger } from "@vendetta";
import Settings from "./Settings";
import {findByName, findByStoreName} from "@vendetta/metro";
import {before} from "@vendetta/patcher";
import { FluxDispatcher } from '@vendetta/metro/common';

const channelStore = findByStoreName("ChannelStore");

const patches = [];
const pluginName = "IHaveNoIdeaWhatImDoingPlugin";
//const Locale = findByProps("Messages");
//const { getLocale } = findByProps("getLocale");
const RowManager = findByName("RowManager");


logger.log("Hello, world first");
console.log("Hello, world first");

function isBlocked(id: string) {
    return id === "meow";
}

// thanks to zykrah for most parts of this function! (https://github.com/zykrah/vendetta-plugins/blob/master/plugins/HideBlockedMessages/src/index.ts)
function startPlugin() {
    try {
        // Main patch
        const patch1 = (
            before("dispatch", FluxDispatcher, ([event]) => {
                if (event.guildId === "748259253512306710"){
                    console.log(event);
                    console.log(event.channelId);
                }
                // Hides blocked messages on channel loads
                if (event.type === "LOAD_MESSAGES_SUCCESS") {
                    event.messages = event.messages.forEach((message) => {
                        if (/*message.attachments.length > 0 &&*/ channelStore.getChannel(event?.channelId)?.nsfw_){
                            console.log(message);
                        }
                    });
                }
                // Hides blocked messages on message creation/update
                if (event.type === "MESSAGE_CREATE" || event.type === "MESSAGE_UPDATE") {
                    const message = event.message;
                    //console.log(message);
                    if (isBlocked(message?.author?.id)) {
                        // Drop event
                        event.channelId = "0";
                    }
                }
            })
        );
        patches.push(patch1);

        // Fallback patch to mostly remove blocked message rows if main patch doesn't work on first load
        const patch2 = (
            before("generate", RowManager.prototype, ([data]) => {
                if (data.message?.attachments?.length > 0) {
                    //console.log(data.message.content);
                }
                if (channelStore.getChannel(data?.message?.channelId)?.nsfw_) {
                    console.log(data.message);
                    // data.renderContentOnly = true;
                    // data.message.content = null;
                    // data.message.reactions = [];
                    // data.message.canShowComponents= false;
                    // if (data.rowType === 2) {
                    //     data.roleStyle = "";
                    //     data.text = "[Temp] Blocked message. Reloading should fix.";
                    //     data.revealed = false;
                    //     data.content = [];
                    // }
                }
            })
        );
        patches.push(patch2);

        logger.log(`${pluginName} loaded.`);
        return null;
    } catch (err) {
        logger.log(`[${pluginName} Error]`, err);
    }
}


export default {
    onLoad: () => startPlugin() /*{
        patches.push(() =>{
            after("generate", RowManager.prototype, ([row], {message}) => {
                console.log("what");
                if (row.rowType !== 1) return;
                if (!message.attachments) return;
                const attachs = [];
                message.attachments.forEach(attachment => {
                    if (filetypes.includes(attachment.filename.toLowerCase().split(".").pop())) {
                        attachs.push(attachment);
                    }
                });
                if (attachs.length) {message.codedLinks.push(...attachs); message.attachments = attachs;}
            });
        });

    }*/,
    onUnload: () => {
        console.log("i do indeed be disabled");
        for (const unpatch of patches) {
            unpatch();
        }
    },
    settings: Settings,
};