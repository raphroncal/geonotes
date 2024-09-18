import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { formatDate, getNote } from "@/components/Card";

export type NoteProps = {
    coordinates: Coordinates;
    title?: string;
    body?: string;
    date: Date;
    image?: any;
};

type Coordinates = {
    longitude: number;
    latitude: number;
    longitudeDelta: number;
    latitudeDelta: number;
};

const saveNote = async (key: string, data: NoteProps) => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        // save error
    }
};

const Note = () => {
    const [note, setNote] = useState<NoteProps>();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();

    getNote(id, setNote);
    return (
        <View className="pt-12 px-5 space-y-5">
            {/* Header */}
            <View className="flex-1 flex-row justify-between mb-5">
                <TouchableOpacity
                    onPress={() => {
                        router.dismiss();
                    }}
                >
                    <Image
                        className="w-5 h-5"
                        source={require("@/assets/images/back.png")}
                    ></Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        saveNote(id, {
                            coordinates: note ? note.coordinates : undefined,
                            title: title,
                            body: body,
                            date: new Date(),
                        } as NoteProps);
                    }}
                >
                    <Image
                        className="w-5 h-6"
                        source={require("@/assets/images/check.png")}
                    ></Image>
                </TouchableOpacity>
            </View>

            {/* Title */}
            <View>
                <TextInput
                    placeholder="Title"
                    placeholderTextColor="#3f3f46"
                    className="text-white text-2xl font-medium h-10 rounded-sm"
                    onChangeText={setTitle}
                >
                    {note ? note.title : undefined}
                </TextInput>
                <Text className="text-zinc-700 italic">
                    {note ? formatDate(note.date) : formatDate(new Date())}
                </Text>
            </View>

            {/* Body */}
            <View>
                <TextInput
                    placeholder="Type here"
                    placeholderTextColor="#3f3f46"
                    className="text-white font-medium h-10 rounded-sm"
                    onChangeText={setBody}
                >
                    {note ? note.body : undefined}
                </TextInput>
            </View>
        </View>
    );
};

export default Note;
