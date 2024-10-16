import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";

export interface ButtonProps {
    onPress?: () => void;
    onLongPress?: () => void;
    variant?: "primary" | "secondary" | "tertiary";
    title: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    style?: any;
    textStyle?: any;
    disabled?: boolean;
    activeOpacity?: number;
    loading?: boolean;
}

const Button = ({
    onPress,
    onLongPress,
    variant = "primary",
    title,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity,
    loading,
}: ButtonProps) => {
    const buttonStyleVariant = [
        styles.button,
        variant === "primary"
            ? styles.primaryButton
            : variant === "secondary"
                ? styles.secondaryButton
                : styles.tertiaryButton,
        disabled
            ? variant === "primary"
                ? styles.primaryButtonDisabled
                : variant === "secondary"
                    ? styles.secondaryButtonDisabled
                    : styles.tertiaryButtonDisabled
            : {},
        style,
    ];

    const textStyleVariant = [
        styles.buttonText,
        variant === "primary"
            ? styles.primaryButtonText
            : variant === "secondary"
                ? styles.secondaryButtonText
                : styles.tertiaryButtonText,
        disabled
            ? variant === "primary"
                ? styles.primaryButtonDisabledText
                : variant === "secondary"
                    ? styles.secondaryButtonDisabledText
                    : {}
            : {},
        textStyle,
    ];

    const activityColorVariant = variant === "primary" ? "white" : Colors.primary;

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
            style={buttonStyleVariant}
        >
            {iconLeft}
            {loading ? (
                <ActivityIndicator color={activityColorVariant} />
            ) : (
                <Text style={textStyleVariant}>{title}</Text>
            )}
            {iconRight}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 44,
        position: "relative",
    },
    disabledButton: {
        backgroundColor: Colors.button.primary.disabled,
    },
    buttonText: {
        fontSize: 16,
        marginLeft: 8,
    },
    primaryButton: {
        backgroundColor: Colors.button.primary.background,
    },
    primaryButtonText: {
        color: Colors.button.primary.text,
    },
    primaryButtonPressed: {
        backgroundColor: Colors.button.primary.pressedBackground,
    },
    primaryButtonDisabled: {
        backgroundColor: Colors.button.primary.disabled,
    },
    primaryButtonDisabledText: {
        color: Colors.button.primary.disabledText,
    },
    secondaryButton: {
        backgroundColor: Colors.button.secondary.background,
    },
    secondaryButtonText: {
        color: Colors.button.secondary.text,
    },
    secondaryButtonPressed: {
        backgroundColor: Colors.button.secondary.pressedBackground,
    },
    secondaryButtonDisabled: {
        backgroundColor: Colors.button.secondary.disabled,
    },
    secondaryButtonDisabledText: {
        color: Colors.button.secondary.disabledText,
    },
    tertiaryButton: {
        backgroundColor: Colors.button.tertiary.background,
    },
    tertiaryButtonText: {
        color: Colors.button.tertiary.text,
    },
    tertiaryButtonPressed: {
        backgroundColor: Colors.button.tertiary.pressedBackground,
    },
    tertiaryButtonDisabled: {
        backgroundColor: Colors.button.tertiary.disabled,
    },
});

export default Button;