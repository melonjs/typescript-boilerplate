import { audio, loader, state, device, video, plugin, pool } from "melonjs";
import TitleScreen from "./scripts/stage/title";
import PlayScreen from "./scripts/stage/play";
import PlayerEntity from "./scripts/renderables/player";
import DataManifest from "./manifest";
import "./index.css";

device.onReady(() => {

    // initialize the display canvas once the device/browser is ready
    if (!video.init(1218, 562, {parent : "screen", scale : "auto"})) {
        alert("Your browser does not support HTML5 canvas.");
        return;
    }

    // initialize the audio
    audio.init("mp3,ogg");

    // allow cross-origin for image/texture loading
    loader.setOptions({crossOrigin: "anonymous"});

    // initialize the debug plugin in development mode
    if (import.meta.env.DEV) {
        import("@melonjs/debug-plugin").then((debugPlugin) => {
            plugin.register(debugPlugin.DebugPanelPlugin, "debugPanel");
        });
    }

    // set and load all resources
    loader.preload(DataManifest, () => {
        // set the user defined game stages
        state.set(state.MENU, new TitleScreen());
        state.set(state.PLAY, new PlayScreen());

        // add our player entity in the entity pool
        pool.register("mainPlayer", PlayerEntity);

        // start the game
        state.change(state.PLAY, false);
    });
});
