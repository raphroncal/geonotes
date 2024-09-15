import app from "@/firebaseConfig";
import Constants from "expo-constants";
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

    return (
        <View
            style={{ marginTop: Constants.statusBarHeight }}
            className="flex justify-center items-center py-2"
        >
            <Button
                onPress={() => {
                    signOut();
                }}
                title="Sign Out"
            />
        </View>
    );
}
