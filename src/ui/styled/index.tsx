import { Image as EIImage } from "expo-image";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import RNSSvg, { Path as RNSPath } from "react-native-svg";
import { getThemes, styled, useThemeName } from "tamagui";

export const SafeAreaView = styled(RNSafeAreaView);
export const Svg = styled(RNSSvg);
export const StyledPath = styled(RNSPath, {
    fill: "$primary",
});
export const Path = StyledPath.styleable((props, ref) => {
    const { fill, ...rest } = props;
    const themeName = useThemeName();
    const themes = getThemes();

    const resolvedFill =
        typeof fill === "string"
            ? fill?.startsWith("$")
                ? themes[themeName][fill?.slice(1) ?? "color"].val
                : fill
            : undefined;
    return <StyledPath ref={ref} {...rest} fill={resolvedFill} />;
});
export const Image = styled(EIImage);
