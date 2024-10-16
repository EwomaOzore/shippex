import { View, StyleSheet, Text, Pressable } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import BottomSheet, {
    BottomSheetBackdrop,
    BottomSheetView,
    useBottomSheet,
} from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';

export type Ref = BottomSheet;

interface Props {
    title?: string;
    snaps?: string[];
    children?: React.ReactNode;
    headerBtnEndText?: string;
    headerBtnEndAction?: () => void;
    showHeaderBorder?: boolean;
    headerBtnStartText?: string;
    headerBtnStartAction?: () => void;
}

const CloseBtn = () => {
    const { close } = useBottomSheet();

    return (
        <Pressable style={styles.btn} onPress={() => close()}>
            <AntDesign name="left" size={24} color={Colors.primary} />
            <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
    );
};

const CustomBottomSheet = forwardRef<Ref, Props>(
    (
        {
            children,
            title,
            headerBtnEndText,
            headerBtnEndAction,
            showHeaderBorder,
            headerBtnStartText,
            headerBtnStartAction,
            snaps = ["25", "50", "75"],
            ...props
        },
        ref,
    ) => {
        const snapPoints = useMemo(() => snaps, [snaps]);
        const renderBackdrop = useCallback(
            (props: any) => (
                <BottomSheetBackdrop
                    {...props}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                />
            ),
            [],
        );

        return (
            <BottomSheet
                ref={ref}
                index={-1}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                {...props}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View
                        style={[
                            styles.headerContainer,
                            {
                                borderBottomWidth: showHeaderBorder ? 2 : 0,
                                borderBottomColor: Colors.ritual100,
                            },
                        ]}
                    >
                        {headerBtnStartText && headerBtnStartAction ? (
                            <Pressable style={styles.btn} onPress={headerBtnStartAction}>
                                <Text style={styles.btnText}>{headerBtnStartText}</Text>
                            </Pressable>
                        ) : (
                            <CloseBtn />
                        )}
                        {headerBtnEndText && headerBtnEndAction && (
                            <Pressable style={styles.btn} onPress={headerBtnEndAction}>
                                <Text style={styles.btnText}>{headerBtnEndText}</Text>
                            </Pressable>
                        )}
                    </View>
                    {children}
                </BottomSheetView>
            </BottomSheet>
        );
    },
);
CustomBottomSheet.displayName = "CustomBottomSheetContext";

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    headerContainer: {
        width: "100%",
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    title: {
        position: "absolute",
        top: 2,
        width: "100%",
        textAlign: "center",
    },
    btn: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    btnText: {
        color: Colors.primary,
        fontSize: 17,
        marginLeft: 5,
    },
});

export default CustomBottomSheet;