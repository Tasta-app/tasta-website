import { getLocales } from "expo-localization";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import { Check, Language } from "react-native-akar-icons";
import { Button, Popover, Text, XStack, YStack, useTheme } from "tamagui";

interface Languages {
    [languageCode: string]: string;
}
interface DisplayLanguagesProps {
    languages: Languages;
    currentLanguage: string;
    handleChangeLanguage: (lang: string) => void;
}
const DisplayLanguages = ({
    languages,
    currentLanguage,
    handleChangeLanguage,
}: DisplayLanguagesProps) => {
    const theme = useTheme();

    return (
        <YStack gap="$3">
            {Object.entries(languages).map(([languageCode, value]) => {
                const isCurrent = languageCode === currentLanguage;
                return (
                    <Pressable
                        key={`language-handler-${languageCode}`}
                        onPress={() => handleChangeLanguage(languageCode)}
                    >
                        <XStack
                            items="center"
                            gap="$2"
                            rounded="$3"
                            p="$2"
                            justify="space-between"
                            hoverStyle={{
                                bg: "$subtle",
                            }}
                        >
                            <Text>{value}</Text>
                            <Check
                                color={
                                    isCurrent
                                        ? theme.color.get()
                                        : theme.background.get()
                                }
                            />
                        </XStack>
                    </Pressable>
                );
            })}
        </YStack>
    );
};
const LanguageSelector = () => {
    const theme = useTheme();
    const { i18n } = useTranslation();
    const languageCode = getLocales()[0]?.languageCode ?? "en";
    const defaultLanguageCode = React.useMemo(
        () => languageCode,
        [languageCode],
    );
    const languages: Languages = {
        en: "English",
        fr: "Français",
    };

    const [currentLanguage, setCurrenLanguage] =
        React.useState(defaultLanguageCode);
    const [openPopover, setOpenPopover] = React.useState(false);

    const handleChangeLanguage = (lang: string) => {
        setCurrenLanguage(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <Popover
            open={openPopover}
            onOpenChange={setOpenPopover}
            allowFlip
            stayInFrame
            offset={15}
        >
            <Popover.Trigger asChild>
                <Button theme="translucent">
                    <Language color={theme.color.get()} />
                    <Text display="none" $sm={{ display: "flex" }}>
                        {languages[currentLanguage] ?? languages.en}
                    </Text>
                </Button>
            </Popover.Trigger>
            <Popover.Content theme="translucent">
                <Popover.Arrow theme="translucent" />
                <DisplayLanguages
                    languages={languages}
                    currentLanguage={currentLanguage}
                    handleChangeLanguage={handleChangeLanguage}
                />
            </Popover.Content>
        </Popover>
    );
};

export default LanguageSelector;
