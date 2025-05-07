const { getDefaultConfig } = require("expo/metro-config");

/** @type {import("expo/metro-config").MetroConfig} */
const config = getDefaultConfig(__dirname, {
    isCSSEnabled: true,
});

const { withTamagui } = require("@tamagui/metro-plugin");
config.resolver.sourceExts.push("mjs");

module.exports = withTamagui(config, {
    components: ["tamagui"],
    config: "./tamagui.config.ts",
    outputCSS: "./assets/css/tamagui-web.css",
});
