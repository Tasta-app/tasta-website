import { Image } from "@/src/ui/styled";
import { getLocales } from "expo-localization";
import React from "react";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";
import { H2, YStack } from "tamagui";

const Badges = React.memo(() => {
    const { t } = useTranslation();

    const languageCode = (getLocales()[0]?.languageCode ?? "en") as "fr" | "en";
    const colorScheme = useColorScheme() as "dark" | "light";

    const googleBadgesMap = {
        en: require("@/assets/images/badges/google/en/badge.png"),
        fr: require("@/assets/images/badges/google/fr/badge.png"),
    };
    const appleBadgesMap = {
        en: {
            light: require("@/assets/images/badges/apple/en/light.svg"),
            dark: require("@/assets/images/badges/apple/en/dark.svg"),
        },
        fr: {
            light: require("@/assets/images/badges/apple/fr/light.svg"),
            dark: require("@/assets/images/badges/apple/fr/dark.svg"),
        },
    };

    return (
        <YStack items="center" gap="$3" pb="$3" $sm={{ pb: "$5" }}>
            <H2 size="$8">{t("availableSoon")}</H2>
            <YStack
                gap="$3"
                items="center"
                $sm={{ flexDirection: "row", gap: "$5" }}
            >
                <Image
                    contentFit="contain"
                    width={190}
                    height={60}
                    $sm={{ width: 240, height: 70 }}
                    source={appleBadgesMap[languageCode][colorScheme]}
                />
                <Image
                    contentFit="contain"
                    width={200}
                    height={60}
                    $sm={{ width: 240, height: 70 }}
                    source={
                        languageCode === "en"
                            ? googleBadgesMap.en
                            : googleBadgesMap.fr
                    }
                />
            </YStack>
        </YStack>
    );
});

export default Badges;
