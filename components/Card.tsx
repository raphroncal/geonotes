import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteProps } from "@/app/notes/[note]";
import { useState } from "react";

type CardProps = {
    id: string;
};

export const getNote = async (
    id: string,
    setState: (value: NoteProps) => void
) => {
    try {
        let jsonString = await AsyncStorage.getItem(id);
        jsonString != null
            ? setState(JSON.parse(jsonString) as NoteProps)
            : null;
    } catch (e) {
        Alert.alert("Failed to load note. Please try again later.");
        router.dismiss();
    }
};

export const formatDate = (d: Date) => {
    if (new Date().getDate() == d.getDate()) {
        return d.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    return d.getDate();
};

const Card: React.FC<CardProps> = ({ id }) => {
    const [note, setNote] = useState<NoteProps>();
    getNote(id, setNote);

    console.log(note);
    return (
        <Link
            href={{
                pathname: "/notes/[note]",
                params: {
                    note: id,
                },
            }}
            onPress={(e) => {
                e.stopPropagation();
            }}
            className="w-full pr-5"
            asChild
        >
            <TouchableOpacity
                className="bg-geonote-orange min-w-[50%] rounded-3xl space-y-3 py-5 mb-2"
                activeOpacity={0.7}
            >
                {/* Title */}
                <View className="flex flex-row justify-between items-center px-5">
                    <Text className="text-xl text-white font-bold">
                        {note ? note.title : undefined}
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            console.log("edit");
                        }}
                    >
                        <Image
                            className="w-5 h-5"
                            source={require("../assets/images/edit.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <Text className="text-gray-300 px-5">
                    {note ? note.body : undefined}
                </Text>
                <Text className="px-5 text-gray-300 italic">
                    {note ? formatDate(note.date) : undefined}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default Card;
