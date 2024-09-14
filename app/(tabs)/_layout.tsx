import app from "@/firebaseConfig";
import { Redirect, Stack, Tabs } from "expo-router";
import { getAuth } from "firebase/auth";

export default function RootLayout() {
    const user = getAuth(app).currentUser;
    console.log(user);

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="map" />
        </Tabs>
    );
}
