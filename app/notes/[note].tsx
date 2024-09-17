import { Text, View, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { CardProps, formatDate } from "@/components/Card";
import { useHeaderHeight } from "@react-navigation/elements";

type Coordinates = {
    longitude: number;
    latitude: number;
};

type NoteProps = {
    coordinates?: Coordinates;
    details?: CardProps;
};

const Note: React.FC<NoteProps> = ({ coordinates, details }) => {
    const { note } = useLocalSearchParams();
    const headerHeight = useHeaderHeight();

    return (
        <View className="pt-16 px-5 space-y-5">
            {/* Header */}
            <View>
                <TextInput
                    placeholder="Title"
                    placeholderTextColor="#52525b"
                    className="text-white text-2xl font-medium h-10 rounded-sm"
                >
                    {details ? details.title : undefined}
                </TextInput>
                <Text className="text-zinc-600 italic">
                    {details ? formatDate(details.date) : "undefined"}
                </Text>
            </View>
            {/* Body */}
            <View>
                <TextInput
                    placeholder="Type here"
                    placeholderTextColor="#52525b"
                    className="text-white font-medium h-10 rounded-sm"
                >
                    {details ? details.body : undefined}
                </TextInput>
            </View>
        </View>
    );
};

export default Note;
