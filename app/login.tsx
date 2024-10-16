import React, { useRef, useCallback, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button";
import CustomBottomSheet from "@/components/BottomSheet";
import Input from "@/components/Input";
import { useLoginMutation } from "@/services/api";
import { router } from "expo-router";

const Home = () => {
    const [url, setUrl] = useState('');
    const [signIn, { isLoading }] = useLoginMutation();
    const [username, setUsername] = useState("test@brandimic.com");
    const [password, setPassword] = useState("testy123@");

    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.expand();
    }, []);

    const handleLogin = async () => {
        await signIn({
            usr: "test@brandimic.com",
            pwd: "testy123@",
        }).unwrap();

        router.replace("/(tabs)/shipments");
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("@/assets/images/logo-white.png")} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login"
                    variant="secondary"
                    onPress={handlePresentModalPress}
                />
            </View>
            <CustomBottomSheet ref={bottomSheetRef} snaps={["90%"]}>
                <View style={styles.bottomSheetContainer}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.description}>Please enter your First, Last name and your phone number in order to register</Text>
                    <View style={styles.formContainer}>
                        <Input
                            placeHolder="URL"
                            value={url}
                            onChangeText={(text: string) => setUrl(text)}
                            prefix="https://"
                        />
                        <Input
                            placeHolder="Username / Email"
                            value={username}
                            onChangeText={(text: string) => setUsername(text)}
                            keyboardType="email-address"
                        />
                        <Input
                            placeHolder="Password"
                            value={password}
                            secureTextEntry
                            onChangeText={(text: string) => setPassword(text)}
                        />
                    </View>
                    <View style={styles.bottomButtonContainer}>
                        <Button
                            title="Login"
                            onPress={handleLogin}
                            loading={isLoading}
                        />
                    </View>
                </View>
            </CustomBottomSheet>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        width: 208,
        height: 36,
    },
    title: {
        fontSize: 34,
        fontWeight: "semibold",
        marginBottom: 16,
    },
    description: {
        fontSize: 17,
        color: Colors.ritual500,
        marginBottom: 38,
    },
    bottomSheetContainer: {
        flex: 1,
        padding: 16,
    },
    formContainer: {
        flexGrow: 1,
        justifyContent: "flex-start",
        gap: 25,
    },
    bottomButtonContainer: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 20,
        marginTop: 'auto',
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 8,
    },
});

export default Home;