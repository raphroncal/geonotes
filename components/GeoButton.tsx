import { TouchableOpacity, Text } from "react-native";

type GeoButtonProps = {
    title: string;
    accessibilityLabel: string;
    onPress: Function;
    color?: string;
    padding?: string;
};

const GeoButton: React.FC<GeoButtonProps> = ({
    title,
    accessibilityLabel,
    onPress,
}) => {
    return (
        <TouchableOpacity
            className="w-full bg-geonote-orange py-3 flex rounded-sm justify-center"
            accessibilityLabel={accessibilityLabel}
            onPress={() => {
                onPress();
            }}
        >
            <Text className="text-white font-bold text-center">{title}</Text>
        </TouchableOpacity>
    );
};

export default GeoButton;
