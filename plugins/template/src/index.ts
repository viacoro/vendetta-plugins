import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const MediaManager = findByProps("downloadMediaAsset");
logger.log("Hello, world first");
console.log("Hello, world first");
export default {
    onLoad: () => {
        logger.log("Hello, world second");
        console.log("Hello, world second");
        before("downloadMediaAsset", MediaManager, (args) => {
            logger.log("Downloading media asset: " + args[0]);
            console.log("Downloading media asset: " + args);
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        console.log("Goodbye, world.");
    },
    settings: Settings,
};