import LanguageSelector from "@/src/features/language";
import Logo from "@/src/features/logo";
import { XStack } from "tamagui";

const Header = () => {
    return (
        <XStack bg="$background" p="$5" justify="space-between">
            <Logo />
            <LanguageSelector />
        </XStack>
    );
};

export default Header;
