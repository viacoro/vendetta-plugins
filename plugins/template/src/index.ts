import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const MediaManager = findByProps("downloadMediaAsset");
const SaveToGallery = findByProps("saveFileToGallery");
logger.log("Hello, world first");
console.log("Hello, world first");

// instead: https://discord.com/channels/1015931589865246730/1062531774187573308/1116640618580561930
export default {
    onLoad: () => {
        logger.log("Hello, world second");
        console.log("is new version");
        console.log("Hello, world second");
        instead("downloadMediaAsset", MediaManager, (args) => {
            console.log("is new version");
            logger.log("Downloading media asset: " + args[0]);
            console.log("Downloading media asset: " + args[0]);
            console.log("All args: " + args);
            SaveToGallery.saveFileToGallery(args[0]);
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        console.log("Goodbye, world.");
    },
    settings: Settings,
};