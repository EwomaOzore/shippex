import { StyleSheet, TextInput, View, Animated, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Colors } from "../constants/Colors";

export interface InputProps {
    placeHolder: string;
    style?: any;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
    maxLength?: number;
    editable?: boolean;
    prefix?: React.ReactNode;
}

const Input = ({
    placeHolder,
    style,
    value,
    onChangeText,
    prefix,
    ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(animatedLabel, {
            toValue: isFocused || value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        top: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 5],
        }),
        fontSize: animatedLabel.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 11],
        }),
        color: isFocused ? Colors.primary : Colors.ritual500,
    };

    return (
        <View style={[styles.container, style]}>
            <Animated.Text style={[styles.placeholder, labelStyle]}>
                {placeHolder}
            </Animated.Text>

            <View style={styles.inputContainer}>
                {prefix && <Text style={styles.prefix}>{prefix}</Text>}
                <TextInput
                    style={[
                        styles.input,
                        isFocused && { borderColor: Colors.primary },
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
    },
    placeholder: {
        position: "absolute",
        left: 14,
        backgroundColor: Colors.ritual100,
        paddingHorizontal: 4,
        zIndex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.ritual100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.ritual400,
        height: 56,
        paddingHorizontal: 14,
    },
    prefix: {
        color: Colors.ritual500,
        fontSize: 16,
        marginRight: 6,
    },
    input: {
        flex: 1,
        color: Colors.primary,
        fontSize: 16,
        height: "100%",
    },
});

export default Input;