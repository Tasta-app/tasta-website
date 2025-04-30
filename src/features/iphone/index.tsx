import type { MockupsProps } from "@/app";
import { Image } from "@/src/ui/styled";
import React from "react";
import { ScrollView, ZStack } from "tamagui";

interface IPhoneProps {
    content: MockupsProps[];
}

const ORIGINAL_FRAME_WIDTH = 1359;
const ORIGINAL_FRAME_HEIGHT = 2736;
const ORIGINAL_FRAME_PADDING = 90;
const ORIGINAL_INNERFRAME_WIDTH =
    ORIGINAL_FRAME_WIDTH - 2 * ORIGINAL_FRAME_PADDING;
const ORIGINAL_INNERFRAME_HEIGHT =
    ORIGINAL_FRAME_HEIGHT - 2 * ORIGINAL_FRAME_PADDING;

const IPhone = ({ content }: IPhoneProps) => {
    const iPhoneFrame = require("@/assets/images/illustrations/iPhone.png");
    const iPhoneStatus = require("@/assets/images/illustrations/iPhoneStatus.png");
    const [position, setPosition] = React.useState(0);

    React.useEffect(() => {
        if (!content || content.length === 0) return;

        const interval = setInterval(() => {
            setPosition((previous) => {
                const next =
                    (previous + innerFrameWidth) %
                    (content.length * innerFrameWidth);
                scrollRef.current.scrollTo({ x: next, y: 0 });
                return next;
            });
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [content]);

    const frameWidth = 300;
    const frameHeight =
        (ORIGINAL_FRAME_HEIGHT * frameWidth) / ORIGINAL_FRAME_WIDTH;
    const innerFrameWidth =
        (ORIGINAL_INNERFRAME_WIDTH * frameWidth) / ORIGINAL_FRAME_WIDTH;
    const innerFrameHeight =
        (ORIGINAL_INNERFRAME_HEIGHT * frameHeight) / ORIGINAL_FRAME_HEIGHT;
    const innerMargin =
        (ORIGINAL_FRAME_PADDING * frameWidth) / ORIGINAL_FRAME_WIDTH;

    const scrollRef = React.useRef<any>(null);

    return (
        <ZStack width={frameWidth} height={frameHeight}>
            <ScrollView
                ref={scrollRef}
                width={innerFrameWidth}
                height={innerFrameHeight}
                overflow="hidden"
                rounded="$10"
                m={innerMargin}
                horizontal
                nestedScrollEnabled
                showsHorizontalScrollIndicator={false}
                contentOffset={{ x: position, y: 0 }}
                bg="$backgroundInverse"
            >
                {content.map((image) => (
                    <Image
                        key={image.key}
                        source={image.image}
                        width={innerFrameWidth}
                        height={innerFrameHeight}
                    />
                ))}
            </ScrollView>
            <Image
                source={iPhoneFrame}
                width={frameWidth}
                height={frameHeight}
            />
            <Image
                source={iPhoneStatus}
                width={frameWidth}
                height={frameHeight}
            />
        </ZStack>
    );
};

export default IPhone;
