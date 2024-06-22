import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({iconName, color, size, onPress}) => {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={iconName} color={color} size={size} />
        </Pressable>
    );
};

export default IconButton;
