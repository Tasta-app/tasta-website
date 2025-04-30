import "@/i18n";
import Header from "@/src/features/header";
import config from "@/tamagui.config";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { StrictMode } from "react";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [loaded, error] = useFonts({
        "CabinetGrotesk-Regular": require("../assets/fonts/CabinetGrotesk-Regular.otf"),
        "CabinetGrotesk-Bold": require("../assets/fonts/CabinetGrotesk-Bold.otf"),
        "BricolageGrotesque_24pt-ExtraBold": require("../assets/fonts/BricolageGrotesque_24pt-ExtraBold.ttf"),
    });

    React.useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <StrictMode>
            <TamaguiProvider
                config={config}
                defaultTheme={colorScheme === "dark" ? "dark" : "light"}
            >
                <Stack screenOptions={{ header: () => <Header /> }} />
            </TamaguiProvider>
        </StrictMode>
    );
}
