import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";

const MediaManager = findByProps("downloadMediaAsset");
let patches = [];
logger.log("Hello, world first");
export default {
    onLoad: () => {
        logger.log("Hello, world second");
        patches.push(
            before("downloadMediaAsset", MediaManager, (args) => {
                logger.log("XYZABC: Downloading media asset: " + args[0]);
            })
        );
    },
    onUnload: () => {
        logger.log("XYZABC: Goodbye, world.");
    },
    settings: Settings,
}