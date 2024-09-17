import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    return (
        <Link
            href={{
                pathname: "/notes/[note]",
                params: {
                    note: "test", // card_id
                },
            }}
            onPress={(e) => {
                e.stopPropagation();
            }}
            className="w-full pr-5"
            asChild
        >
            <TouchableOpacity
                className="bg-geonote-orange min-w-[50%] max-h-[33%] rounded-3xl space-y-3 py-5 mb-2"
                activeOpacity={0.7}
            >
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
                <View className="">
                    <Text className="text-gray-300 px-5">
                        {body ? body : "No text"}
                    </Text>
                </View>
                <Text className="px-5 text-gray-300 italic">
                    {formatDate(date)}
                </Text>
            </TouchableOpacity>
        </Link>
    );
};

export default Card;
