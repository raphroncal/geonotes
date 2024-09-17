import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { getAuth } from "firebase/auth";
import app from "@/firebaseConfig";
import { useState } from "react";
import { NoteProps } from "../notes/[note]";

export type Note = {
    [id: string]: NoteProps;
};

export default function Layout() {
    const [notes, setNotes] = useState<Note>();
    const user = getAuth(app).currentUser;

    if (!user) {
        return <Redirect href="/sign-in" />;
    }

    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                initialParams={{ notes, setNotes }}
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
                initialParams={{ notes, setNotes }}
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
