import Card from "@/components/Card";
import app from "@/firebaseConfig";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

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
            className="flex-1 py-5 px-8"
        >
            {/* Header */}
            <View className="flex-row justify-between items-baseline mb-5">
                <Text className="text-3xl text-white">Geonotes</Text>
                <Text
                    className="text-geonote-orange"
                    onPress={() => {
                        signOut;
                    }}
                >
                    Sign Out
                </Text>
            </View>
            {/* Content */}
            <ScrollView showsVerticalScrollIndicator={false} className="h-min">
                <Card title="Test" date={new Date()}></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="I am testing my notes hehehehehehehehehehehehehehehe"
                ></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="This as Pochita fr fr"
                    image={require("@/assets/images/moo-deng.jpg")}
                ></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="This as Pochita fr fr"
                    image={require("@/assets/images/moo-deng.jpg")}
                ></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="This as Pochita fr fr"
                    image={require("@/assets/images/moo-deng.jpg")}
                ></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="This as Pochita fr fr"
                    image={require("@/assets/images/moo-deng.jpg")}
                ></Card>
                <Card
                    title="Test"
                    date={new Date()}
                    body="This as Pochita fr fr"
                    image={require("@/assets/images/moo-deng.jpg")}
                ></Card>
            </ScrollView>
        </View>
    );
}
