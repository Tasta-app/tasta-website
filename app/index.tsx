import Badges from "@/src/features/badges";
import Header from "@/src/features/header";
import IPhone from "@/src/features/iphone";
import { SafeAreaView } from "@/src/ui/styled";
import { useTranslation } from "react-i18next";
import { H1, H2, ScrollView, SizableText, YStack, useMedia } from "tamagui";

export interface MockupsProps {
    key: string;
    image: any;
}

export default function Index() {
    const { t } = useTranslation();
    const media = useMedia();

    const createImage: MockupsProps[] = [
        {
            key: "ff8597ff-5455-400a-825f-86fc6197a2e8",
            image: "/images/illustrations/new-recipe/1.png",
        },
        {
            key: "111e1706-f0ba-400f-b8a8-07f1f9a30684",
            image: "/images/illustrations/new-recipe/2.png",
        },
        {
            key: "30a2e97b-8dbc-4e66-a306-f59724405c37",
            image: "/images/illustrations/new-recipe/3.png",
        },
        {
            key: "763e9a6f-a8cd-4803-b886-c124edf3f56e",
            image: "/images/illustrations/new-recipe/4.png",
        },
    ];

    const planImage: MockupsProps[] = [
        {
            key: "d56a2a98-b5cd-411e-9cc5-abb3be6db271",
            image: "/images/illustrations/planning/1.png",
        },
        {
            key: "fdabe63f-e24e-462e-9c0c-f99ef96278b2",
            image: "/images/illustrations/planning/2.png",
        },
    ];

    return (
        <SafeAreaView bg="$background" flex={1} p="$3" $sm={{ p: "$5" }}>
            <Header />
            <ScrollView flex={1}>
                <YStack flex={1} p="$3" gap="$3" $sm={{ p: "$5", gap: "$5" }}>
                    <YStack gap="$2" justify="flex-start" items="center">
                        <H1 text="center">{t("welcome")}</H1>
                        <SizableText size="$7" color="$subtle" text="center">
                            {t("presentation")}
                        </SizableText>
                    </YStack>
                    <YStack
                        flex={1}
                        gap="$5"
                        $sm={{ gap: "$7" }}
                        justify="center"
                    >
                        <YStack
                            gap="$5"
                            justify="center"
                            items="center"
                            $sm={{
                                flexDirection: "row-reverse",
                                items: "unset",
                            }}
                        >
                            <YStack gap="$3" flex={1} $sm={{ gap: "$5" }}>
                                <H2>{t("explanations.create.title")}</H2>
                                <SizableText size="$7" text="justify">
                                    {t("explanations.create.description")}
                                </SizableText>
                            </YStack>
                            {createImage && <IPhone content={createImage} />}
                        </YStack>
                        <YStack
                            gap="$5"
                            justify="center"
                            items="center"
                            $sm={{ flexDirection: "row", items: "unset" }}
                        >
                            <YStack gap="$3" flex={1} $sm={{ gap: "$5" }}>
                                <H2>{t("explanations.planning.title")}</H2>
                                <SizableText size="$7" text="justify">
                                    {t("explanations.planning.description")}
                                </SizableText>
                            </YStack>
                            {planImage && <IPhone content={planImage} />}
                        </YStack>
                    </YStack>
                </YStack>
                {!media.lg && <Badges />}
            </ScrollView>
            {media.lg && <Badges />}
        </SafeAreaView>
    );
}
