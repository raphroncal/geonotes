import { Link } from "expo-router";
import { Button, TextInput, View } from "react-native";

type Props = {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    authType: string;
};

export function Authentication({ authType, setEmail, setPassword }: Props) {
    return (
        <View className="w-max flex justify-center align-middle">
            <TextInput placeholder="Email" onChangeText={setEmail} />
            <TextInput placeholder="Password" onChangeText={setPassword} />
            <Button title="Sign Up" accessibilityLabel="Sign up button" />
            <Link href="/sign-in">Create an account</Link>
        </View>
    );
}
