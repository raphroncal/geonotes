import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

type CardProps = {
    title: string;
    date: Date;
    body?: string;
    image?: string;
};

const Card: React.FC<CardProps> = ({ title, body, image, date }) => {
    const formatDate = (d: Date) => {
        if (new Date().getDate() == d.getDate()) {
            return d.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            });
        }

        return d.getDate();
    };

    return (
        <View
            className="bg-geonote-orange w-1/2 h-min max-h-[33%] rounded-3xl pb-5 flex justify-between"
            onStartShouldSetResponder={(e) => true}
            onTouchEnd={(e) => {
                e.stopPropagation();
            }}
        >
            <View className="space-y-3">
                <Image
                    className={
                        image
                            ? "w-full h-full max-h-[40%] rounded-t-3xl"
                            : "pt-2"
                    }
                    source={
                        image
                            ? require("../assets/images/moo-deng.jpg")
                            : undefined
                    }
                ></Image>
                {/* title */}
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
                            source={require("../assets/images/close.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {/* body */}
                <Text className="text-gray-300 px-5">
                    {body ? body : "No text"}
                </Text>
                <Text className="px-5 text-gray-300 italic">
                    {formatDate(date)}
                </Text>
            </View>
        </View>
    );
};

export default Card;
