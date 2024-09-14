import app from "@/firebaseConfig";
import { getAuth } from "firebase/auth";
import { Button, Text, View } from "react-native";

export default function Index() {
    const signOut = async () => {
        try {
            await getAuth().signOut();
        } catch (e) {
            console.log(e);
        }
    };

    const user = getAuth(app).currentUser;
    console.log("signed in!");
    console.log(user);

    return (
        <View className="flex justify-center items-center">
            <Button
                onPress={() => {
                    signOut();
                }}
                title="Sign Out"
            />
        </View>
    );
}
