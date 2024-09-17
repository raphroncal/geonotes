import { useState } from "react";
import { Alert, View, TextInput, Text } from "react-native";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/firebaseConfig";
import Constants from "expo-constants";
import GeoButton from "@/components/GeoButton";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.replace("/");
        } catch (error) {
            Alert.alert("Sign in failed. Check your email or password.");
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
                    Welcome back!
                </Text>
            </View>

            {/* Form */}
            <View className="space-y-3">
                <TextInput
                    placeholder="Email"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    className="bg-white text-black h-10 rounded-sm px-3"
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    className="bg-white text-black h-10 px-3 rounded-sm mb-10"
                    onChangeText={setPassword}
                />
            </View>
            <View className="space-y-3">
                <GeoButton
                    title="Sign In"
                    accessibilityLabel="Button to sign in"
                    onPress={signIn}
                />

                <Link href="/sign-up" className="text-geonote-orange">
                    Create an account
                </Link>
            </View>
        </View>
    );
}
