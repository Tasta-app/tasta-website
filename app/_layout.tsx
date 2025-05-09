import "@/assets/css/tamagui-web.css";
import "@/i18n";
import config from "@/tamagui.config";
import { SchemeProvider, useColorScheme } from "@vxrn/color-scheme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { StrictMode } from "react";
import { TamaguiProvider } from "tamagui";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [colorScheme] = useColorScheme();

    const [loaded, error] = useFonts({
        "CabinetGrotesk-Regular": "/fonts/CabinetGrotesk-Regular.otf",
        "CabinetGrotesk-Bold": "/fonts/CabinetGrotesk-Bold.otf",
        "BricolageGrotesque_24pt-ExtraBold":
            "/fonts/BricolageGrotesque_24pt-ExtraBold.ttf",
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
            <SchemeProvider>
                <TamaguiProvider
                    disableInjectCSS
                    config={config}
                    defaultTheme={colorScheme}
                >
                    <Stack screenOptions={{ headerShown: false }} />
                </TamaguiProvider>
            </SchemeProvider>
        </StrictMode>
    );
}
