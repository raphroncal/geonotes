import app from "@/firebaseConfig";
import { Redirect, Stack, Tabs } from "expo-router";
import { getAuth } from "firebase/auth";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function RootLayout() {
    const user = getAuth(app).currentUser;

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Notes",
                    tabBarActiveTintColor: "#AF5427",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "document" : "document-outline"}
                            color={focused ? "#AF5427" : color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: "Map View",
                    tabBarActiveTintColor: "#AF5427",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "map" : "map-outline"}
                            color={focused ? "#AF5427" : color}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
