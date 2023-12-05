import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const MediaManager = findByProps("downloadMediaAsset");
let patches = [];

export default {
    onLoad: () => {
        patches.push(
            before("downloadMediaAsset", MediaManager, (args) => {
                logger.log("Downloading media asset: " + args[0]);
            })
        );
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}