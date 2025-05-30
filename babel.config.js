module.exports = (api) => {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "@": "./",
                    },
                },
            ],
            [
                "@tamagui/babel-plugin",
                {
                    components: ["tamagui"],
                    config: "./tamagui.config.ts",
                    logTimings: true,
                    disableExtraction: ["development", "test"].includes(
                        process.env.NODE_ENV,
                    ),
                },
            ],
        ],
    };
};
