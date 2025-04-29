import Logo from "@/src/features/logo";
import { XStack } from "tamagui";

const Header = () => {
    return (
        <XStack bg="$background" p="$5">
            <Logo />
        </XStack>
    );
};

export default Header;
