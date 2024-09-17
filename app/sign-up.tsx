import { useState } from "react";
import { Alert, View, TextInput, Text } from "react-native";
import { router } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "@/firebaseConfig";
import Constants from "expo-constants";
import GeoButton from "@/components/GeoButton";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        const auth = getAuth(app);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            Alert.alert("Registration failed. Please try again later.");
        }
    };

    return (
        <View
            style={{ marginTop: Constants.statusBarHeight }}
            className="flex-1 py-5 px-10 space-y-5"
        >
            {/* Header */}
            <View className="my-6">
                <Text className="text-white text-center font-bold text-3xl">
                    Glad to have you here!
                </Text>
            </View>

            {/* Form */}
            <View className="space-y-3">
                <TextInput
                    placeholder="Email"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    className="placeholder:text-slate-50 bg-white text-black h-10 rounded-sm px-3"
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    className="placeholder:text-slate-50 bg-white text-black h-10 rounded-sm px-3 mb-10"
                    onChangeText={setPassword}
                />
            </View>
            <View className="space-y-3">
                <GeoButton
                    title="Sign Up"
                    accessibilityLabel="Button to sign up"
                    onPress={signUp}
                />

                <Text
                    className="text-geonote-orange"
                    onPress={() => {
                        router.dismiss();
                    }}
                >
                    Already have an account?
                </Text>
            </View>
        </View>
    );
}
