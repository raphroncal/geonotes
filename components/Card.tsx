import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import Note from "@/app/(tabs)/notes/[note]";
import { Link } from "expo-router";

export type CardProps = {
    title: string;
    date: Date;
    body?: string;
    image?: any;
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

const Card: React.FC<CardProps> = ({ title, body, image, date }) => {
    const [isNoteOpen, setIsNoteOpen] = useState(false);
    return (
        <View
            className="bg-geonote-orange min-w-[50%] max-h-[33%] rounded-3xl mb-2"
            onStartShouldSetResponder={(e) => true}
            onTouchEnd={(e) => {
                e.stopPropagation();
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    setIsNoteOpen(true);
                }}
            >
                {/* {image ? (
                <Image
                    className="flex-1 h-28 rounded-t-3xl resize"
                    source={image}
                ></Image>
            ) : undefined} */}
                <View className="space-y-3 py-5">
                    {/* Title */}
                    <View className="flex flex-row justify-between items-center px-5">
                        <Text className="text-xl text-white font-bold">
                            {title}
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

                    {/* Content */}
                    <Text className="text-gray-300 px-5">
                        {body ? body : "No text"}
                    </Text>
                    <Text className="px-5 text-gray-300 italic">
                        {formatDate(date)}
                    </Text>
                </View>
            </TouchableOpacity>
            {isNoteOpen ? (
                // <Link href={{pathname: "/(tabs)\notes[note]", params: { setModal: setIsNoteOpen,}}}
                <Link
                    href={{
                        pathname: "/(tabs)\notes[note]",
                        params: {
                            id: "test", // card_id
                        },
                    }}
                ></Link>
            ) : undefined}
        </View>
    );
};

export default Card;
