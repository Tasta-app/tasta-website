export default {
    name: "tasta-website",
    slug: "tasta-website",
    version: "1.0.0",
    platforms: ["web"],
    orientation: "portrait",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    jeEngine: "hermes",
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png",
    },
    plugins: [
        "expo-router",
        [
            "expo-splash-screen",
            {
                image: "./assets/images/splash-icon.png",
                imageWidth: 200,
                resizeMode: "contain",
                backgroundColor: "#ffffff",
            },
        ],
        "expo-font",
        "expo-localization",
    ],
    experiments: {
        typedRoutes: true,
    },
    extra: {
        router: {
            origin: false,
        },
        eas: {
            projectId: "45a2aea7-7e33-411e-a700-069c1967456d",
        },
    },
    owner: "tasta-app",
    newArchEnabled: true,
};
