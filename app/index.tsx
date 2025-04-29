import { Image } from "@/src/ui/styled";
import { getLocales } from "expo-localization";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";
import { H1, H2, SizableText, View, XStack, YStack } from "tamagui";

export default function Index() {
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
        <View bg="$background" flex={1} justify="center" items="center" p="$3">
            <YStack items="center" justify="center">
                <H1>{t("welcome")}</H1>
                <SizableText size="$7" color="$subtle">
                    {t("presentation")}
                </SizableText>
            </YStack>
            <YStack flex={1} justify="center">
                <XStack flex={1}>
                    <YStack flex={1} justify="center">
                        <H2>{t("explanations.create.title")}</H2>
                        <SizableText size="$7">
                            {t("explanations.create.description")}
                        </SizableText>
                    </YStack>
                </XStack>
                <XStack flex={1}>
                    <YStack flex={1} justify="center">
                        <H2>{t("explanations.planning.title")}</H2>
                        <SizableText size="$7" color="$subtle">
                            {t("explanations.planning.description")}
                        </SizableText>
                    </YStack>
                </XStack>
            </YStack>
            <YStack p="$3" items="center" gap="$3">
                <H2>{t("availableSoon")}</H2>
                <XStack gap="$5">
                    <Image
                        contentFit="cover"
                        width={270}
                        height={80}
                        source={appleBadgesMap[languageCode][colorScheme]}
                    />
                    <Image
                        contentFit="cover"
                        width={270}
                        height={80}
                        source={
                            languageCode === "en"
                                ? googleBadgesMap.en
                                : googleBadgesMap.fr
                        }
                    />
                </XStack>
            </YStack>
        </View>
    );
}
