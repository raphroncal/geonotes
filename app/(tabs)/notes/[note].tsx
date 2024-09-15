import { TouchableOpacity, Text, View, TextInput } from "react-native";
import { CardProps, formatDate } from "@/components/Card";

type NoteProps = {
    longitude?: number;
    latitude?: number;
    setModal: Function;
    details?: CardProps;
};

const Note: React.FC<NoteProps> = ({
    longitude,
    latitude,
    setModal,
    details,
}) => {
    return (
        <View className="h-full w-full bg-black z-20">
            {/* Header */}
            <View className="flex-1 flex-col">
                <TextInput>{details ? details.title : undefined}</TextInput>
                <Text>{details ? formatDate(details.date) : undefined}</Text>
            </View>
            <View>
                <TextInput>{details ? details.body : undefined}</TextInput>
            </View>
        </View>
    );
};

export default Note;
