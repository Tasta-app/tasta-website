import LanguageSelector from "@/src/features/language";
import Logo from "@/src/features/logo";
import { XStack } from "tamagui";
import ThemeSwitch from "../themeSwitch";

const Header = () => {
    return (
        <XStack bg="$background" p="$5" justify="space-between">
            <Logo />
            <XStack gap="$3" $lg={{ gap: "$5" }}>
                <LanguageSelector />
                <ThemeSwitch />
            </XStack>
        </XStack>
    );
};

export default Header;
