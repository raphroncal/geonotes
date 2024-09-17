import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteProps } from "@/app/notes/[note]";

type CardProps = {
    id: string;
};

const Card: React.FC<CardProps> = ({ id }) => {
    const getNote = async (id: string) => {
        try {
            let jsonString = await AsyncStorage.getItem(id);
            let jsonValue: NoteProps =
                jsonString != null ? JSON.parse(jsonString) : null;
            return jsonValue;
        } catch (e) {
            Alert.alert("Failed to load note. Please try again later.");
            router.dismiss();
        }
    };

    let note = getNote(id);
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
                    <Text className="text-xl text-white font-bold">{}</Text>

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

                {/* Content */}
                <Text className="text-gray-300 px-5">
                    {/* {id.body ? id.body : "No text"} */}
                </Text>
                <Text className="px-5 text-gray-300 italic">
                    {/* {id.date ? formatDate(id.date) : undefined} */}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default Card;
