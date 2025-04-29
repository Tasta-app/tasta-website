import {
    createSystemFont,
    defaultConfig,
    tokens as defaultTokens,
} from "@tamagui/config/v4";
import { createTamagui, createTokens } from "tamagui";

export const cabinetGrotesk = createSystemFont({
    font: {
        family: "CabinetGrotesk-Regular",
        size: {
            5: 15,
            $md: 15,
        },
        face: {
            700: { normal: "CabinetGrotesk-Bold" },
            800: { normal: "CabinetGrotesk-Bold" },
            900: { normal: "CabinetGrotesk-Bold" },
            bold: { normal: "CabinetGrotesk-Bold" },
        },
    },
});

export const bricolageGrotesque = createSystemFont({
    font: {
        family: "BricolageGrotesque_24pt-ExtraBold",
        size: {
            5: 15,
            $md: 15,
        },
    },
});

export const fonts = {
    body: cabinetGrotesk,
    heading: bricolageGrotesque,
};

export const tokens = createTokens({
    ...defaultTokens,
    size: {
        ...defaultTokens.size,
        $xs: 29,
        $sm: 37,
        $md: 52,
        $lg: 71,
    },
    color: {
        acadia: "hsl(50, 69%, 5%)",
        lightAcadia: "hsla(50, 69%, 5%, 0.65)",
        extraLightAcadia: "hsla(53, 69%, 5%, 0.1)",
        eerieBlack: "hsl(50, 11%, 11%)",
        white: "hsl(0, 0%, 100%)",
        orange: "hsl(20, 95%, 50%)",
        lightOrange: "hsla(20, 95%, 50%, 0.8)",
        seaShell: "hsl(21, 71%, 95%)",
        lightCream: "hsl(51, 100%, 85%)",
        extraLightCream: "hsla(51, 100%, 85%, 0.5)",
        offWhite: "hsl(51, 100%, 99%)",
        outerSpace: "hsl(120, 1%, 28%)",
        lightOuterSpace: "hsla(120, 1%, 28%, 0.6)",
        platinium: "hsl(0, 0%, 91%)",
        silver: "hsl(0, 0%, 67%)",
        silver2: "hsl(0, 0%, 64%)",
        transparent: "hsla(0, 0%, 0%, 0%)",
        battleShipGrey: "hsl(90, 1%, 55%)",

        // Errors/Warning/Info
        lightError: "hsl(338, 91%, 45%)",
        lightWarning: "hsl(44, 100%, 35%)",
        lightSuccess: "hsl(146, 51%, 40%)",
        darkError: "hsl(338, 91%, 85%)",
        darkWarning: "hsl(44, 100%, 50%)",
        darkSuccess: "hsl(146, 51%, 65%)",
    },
});

const light = {
    // default min
    background: tokens.color.white,
    backgroundHover: tokens.color.white,
    backgroundPress: tokens.color.silver,
    backgroundFocus: tokens.color.white,
    backgroundStrong: tokens.color.platinium,
    backgroundTransparent: tokens.color.transparent,
    backgroundInverse: tokens.color.acadia,
    color: tokens.color.acadia,
    inverseColor: tokens.color.white,
    colorHover: tokens.color.acadia,
    colorPress: tokens.color.acadia,
    colorFocus: tokens.color.acadia,
    colorTransparent: tokens.color.transparent,
    borderColor: tokens.color.platinium,
    borderColorHover: tokens.color.platinium,
    borderColorFocus: tokens.color.acadia,
    borderColorPress: tokens.color.platinium,
    placeholderColor: tokens.color.silver,
    outlineColor: tokens.color.platinium,

    // custom
    primary: tokens.color.orange,
    lightPrimary: tokens.color.seaShell,
    secondary: tokens.color.lightCream,
    subtle: tokens.color.silver,
    error: tokens.color.lightError,
    warnning: tokens.color.lightWarning,
    success: tokens.color.lightSuccess,
};

type BaseTheme = typeof light;

const dark: BaseTheme = {
    background: tokens.color.acadia,
    backgroundHover: tokens.color.acadia,
    backgroundPress: tokens.color.lightAcadia,
    backgroundFocus: tokens.color.acadia,
    backgroundStrong: tokens.color.extraLightAcadia,
    backgroundTransparent: tokens.color.transparent,
    backgroundInverse: tokens.color.offWhite,
    color: tokens.color.offWhite,
    inverseColor: tokens.color.acadia,
    colorHover: tokens.color.offWhite,
    colorPress: tokens.color.offWhite,
    colorFocus: tokens.color.offWhite,
    colorTransparent: tokens.color.transparent,
    borderColor: tokens.color.outerSpace,
    borderColorHover: tokens.color.outerSpace,
    borderColorFocus: tokens.color.offWhite,
    borderColorPress: tokens.color.outerSpace,
    placeholderColor: tokens.color.outerSpace,
    outlineColor: tokens.color.outerSpace,
    primary: tokens.color.lightCream,
    lightPrimary: tokens.color.extraLightCream,
    secondary: tokens.color.eerieBlack,
    subtle: tokens.color.battleShipGrey,
    error: tokens.color.darkError,
    warnning: tokens.color.darkWarning,
    success: tokens.color.darkSuccess,
};

const light_translucent: BaseTheme = {
    ...light,
};

const dark_translucent: BaseTheme = {
    ...dark,
    background: tokens.color.eerieBlack,
};

const light_Input: BaseTheme = {
    ...light,
};

const dark_Input: BaseTheme = {
    ...dark,
};

const light_subtle_Input: BaseTheme = {
    ...light,
    background: tokens.color.platinium,
    primary: tokens.color.silver,
};

const dark_subtle_Input: BaseTheme = {
    ...dark,
    background: tokens.color.eerieBlack,
    primary: tokens.color.silver,
};

const light_Select: BaseTheme = {
    ...light_Input,
};

const dark_Select: BaseTheme = {
    ...dark_Input,
};

const light_Toast: BaseTheme = {
    ...dark,
};

const dark_Toast: BaseTheme = {
    ...light,
};

const light_Button: BaseTheme = {
    ...light,
    background: tokens.color.lightCream,
};

const dark_Button: BaseTheme = {
    ...dark,
    background: tokens.color.battleShipGrey,
};

const light_accent_Button: BaseTheme = {
    ...light,
    background: tokens.color.orange,
    color: tokens.color.white,
};

const dark_accent_Button: BaseTheme = {
    ...dark,
    background: tokens.color.lightCream,
    color: tokens.color.acadia,
};

const light_subtle_Button: BaseTheme = {
    ...light,
    background: tokens.color.platinium,
    backgroundFocus: tokens.color.acadia,
    colorFocus: tokens.color.offWhite,
};

const dark_subtle_Button: BaseTheme = {
    ...dark,
    background: tokens.color.battleShipGrey,
    backgroundFocus: tokens.color.acadia,
    colorFocus: tokens.color.offWhite,
};

const light_transparent_Button: BaseTheme = {
    ...light,
    background: tokens.color.white,
    color: tokens.color.acadia,
};

const dark_transparent_Button: BaseTheme = {
    ...light,
    background: tokens.color.acadia,
    color: tokens.color.offWhite,
};

const light_transparent_accent_Button: BaseTheme = {
    ...light,
    background: tokens.color.white,
    color: tokens.color.orange,
};

const dark_transparent_accent_Button: BaseTheme = {
    ...light,
    background: tokens.color.eerieBlack,
    color: tokens.color.lightCream,
};

const light_Checkbox: BaseTheme = {
    ...light,
    background: tokens.color.lightCream,
    color: tokens.color.acadia,
};

const dark_Checkbox: BaseTheme = {
    ...dark,
    background: tokens.color.battleShipGrey,
    color: tokens.color.acadia,
};

const light_TabsTrigger: BaseTheme = {
    ...light,
    background: tokens.color.platinium,
    backgroundFocus: tokens.color.acadia,
    color: tokens.color.acadia,
    colorFocus: tokens.color.offWhite,
};

const light_active_TabsTrigger: BaseTheme = {
    ...light,
    background: tokens.color.acadia,
    backgroundFocus: tokens.color.acadia,
    color: tokens.color.offWhite,
};

const dark_TabsTrigger: BaseTheme = {
    ...light,
    background: tokens.color.eerieBlack,
    color: tokens.color.offWhite,
};

const dark_active_TabsTrigger: BaseTheme = {
    ...light,
    background: tokens.color.lightCream,
    color: tokens.color.acadia,
};

const config = createTamagui({
    ...defaultConfig,
    tokens,
    fonts,
    themes: {
        light,
        dark,
        light_translucent,
        dark_translucent,
        light_Input,
        dark_Input,
        light_subtle_Input,
        dark_subtle_Input,
        light_Select,
        dark_Select,
        light_Toast,
        dark_Toast,
        light_Button,
        dark_Button,
        light_accent_Button,
        dark_accent_Button,
        light_subtle_Button,
        dark_subtle_Button,
        light_transparent_Button,
        dark_transparent_Button,
        light_transparent_accent_Button,
        dark_transparent_accent_Button,
        light_Checkbox,
        dark_Checkbox,
        light_TabsTrigger,
        light_active_TabsTrigger,
        dark_TabsTrigger,
        dark_active_TabsTrigger,
    },
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
    interface TamaguiCustomConfig extends Conf {}
}
