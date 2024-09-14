import { useState } from "react";
import { Alert, Button, View, TextInput } from "react-native";
import app from "@/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "expo-router";
import { Authentication } from "@/components/Authentication";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const signUp = async () => {
    const auth = getAuth();
    try {
        await createUserWithEmailAndPassword(auth, email, password);

        Alert.alert("Success");
    } catch (error) {
        Alert.alert("error");
    }
};

export default function SignUp() {
    return (
        <View className="w-max flex justify-center align-middle">
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" onChangeText={setPassword} />
            <Button
                title="Sign Up"
                accessibilityLabel="Sign up button"
                onPress={signUp}
            />
            <Link href="/sign-in">Already have an account?</Link>
        </View>
    );
}
