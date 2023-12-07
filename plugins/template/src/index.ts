import { logger } from "@vendetta";
import Settings from "./Settings";
import { findByProps } from "@vendetta/metro";
import {before, instead} from "@vendetta/patcher";

const MediaManager = findByProps("downloadMediaAsset");
const SaveToGallery = findByProps("writeFile");
logger.log("Hello, world first");
console.log("Hello, world first");

export default {
    onLoad: () => {
        logger.log("Hello, world second");
        console.log("is new version");
        console.log("Hello, world second");
        before("downloadMediaAsset", MediaManager, (args) => {
            console.log("is new version");
            logger.log("Downloading media asset: " + args[0]);
            console.log("Downloading media asset: " + args[0]);
            console.log("All args: " + args);
            SaveToGallery.writeFile(args[0]);
        });
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
        console.log("Goodbye, world.");
    },
    settings: Settings,
};