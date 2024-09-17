import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";

export type NoteProps = {
    coordinates?: Coordinates;
    title?: string;
    body?: string;
    date?: Date;
    image?: any;
};

type Coordinates = {
    longitude: number;
    latitude: number;
};

const Note: React.FC = () => {
    const formatDate = (d: Date) => {
        if (new Date().getDate() == d.getDate()) {
            return d.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
        }

        return d.getDate();
    };

    const note: NoteProps = useLocalSearchParams();
    const router = useRouter();

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
                <TouchableOpacity onPress={() => {}}>
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
                >
                    {note.title}
                </TextInput>
                <Text className="text-zinc-700 italic">
                    {note.date ? formatDate(note.date) : formatDate(new Date())}
                </Text>
            </View>

            {/* Body */}
            <View>
                <TextInput
                    placeholder="Type here"
                    placeholderTextColor="#3f3f46"
                    className="text-white font-medium h-10 rounded-sm"
                >
                    {note.body}
                </TextInput>
            </View>
        </View>
    );
};

export default Note;
