import { Image } from "@/src/ui/styled";
import React from "react";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";
import { H2, YStack } from "tamagui";

const Badges = React.memo(() => {
    const { t, i18n } = useTranslation();

    const currentLanguageCode = React.useMemo(
        () => i18n.language,
        [i18n.language],
    );
    const colorScheme = useColorScheme() as "dark" | "light";

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
                    source={`/images/badges/apple/${currentLanguageCode}/${colorScheme}.svg`}
                />
                <Image
                    contentFit="contain"
                    width={200}
                    height={60}
                    $sm={{ width: 240, height: 70 }}
                    source={`/images/badges/google/${currentLanguageCode}/badge.png`}
                />
            </YStack>
        </YStack>
    );
});

export default Badges;
