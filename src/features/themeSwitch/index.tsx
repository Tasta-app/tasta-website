import { useSchemeSetting } from "@vxrn/color-scheme";
import { capitalCase } from "change-case";
import { DesktopDevice, Moon, Sun } from "react-native-akar-icons";
import { Button, useTheme } from "tamagui";

const schemeSettings = ["light", "dark", "system"] as const;

export const useToggleTheme = () => {
    const [{ setting, scheme }, setSchemeSetting] = useSchemeSetting();
    const Icon =
        setting === "system" ? DesktopDevice : setting === "dark" ? Moon : Sun;

    return {
        setting,
        scheme,
        Icon,
        onPress: () => {
            const next =
                schemeSettings[(schemeSettings.indexOf(setting) + 1) % 3];

            setSchemeSetting(next);
        },
    };
};
const ThemeSwitch = () => {
    const theme = useTheme();
    const { onPress, Icon, setting } = useToggleTheme();

    return (
        <Button theme="translucent" onPress={onPress}>
            <Button.Icon>
                <Icon color={theme.color.get()} />
            </Button.Icon>
            <Button.Text display="none" $lg={{ display: "flex" }}>
                {capitalCase(setting)}
            </Button.Text>
        </Button>
    );
};

export default ThemeSwitch;
