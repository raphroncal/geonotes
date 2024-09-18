import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import Card from "@/components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

type IndexProps = {
    notes: string[];
    setNotes: (value: string[]) => void;
};

const Index: React.FC<IndexProps> = ({ notes, setNotes }) => {
    useEffect(() => {
        async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                let newKeys: string[] = [];
                for (let i in keys) {
                    newKeys[i] = keys[i];
                }
                setNotes(newKeys);
            } catch (error) {
                console.log(
                    error,
                    "Unable to retrieve notes. Please try again."
                );
            }
        };
    }, notes);

    const signOut = async () => {
        try {
            await getAuth().signOut();
        } catch (e) {
            console.log(e);
        }
    };

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
                {notes
                    ? notes.map((id: string) => {
                          return <Card id={id}></Card>;
                      })
                    : undefined}
            </ScrollView>
        </View>
    );
};

export default Index;
