import { useState } from "react";
import { Alert, Button, View, TextInput, Text } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, router } from "expo-router";
import app from "@/firebaseConfig";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Alert.alert("Success");
            router.replace("/");
        } catch (error) {
            Alert.alert("error");
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                autoCapitalize="none"
                className="placeholder:text-slate-50 bg-white text-black"
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                textContentType="password"
                autoCapitalize="none"
                className="placeholder:text-slate-50 bg-white"
                onChangeText={setPassword}
            />
            <Button
                title="Sign In"
                accessibilityLabel="Sign in button"
                onPress={signIn}
            />
            <Link href="/sign-up">Create an account</Link>
        </View>
    );
}
