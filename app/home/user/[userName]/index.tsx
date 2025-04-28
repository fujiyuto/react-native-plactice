import { StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";


export default function Detail() {
    // ユーザー名
    const { userName } = useLocalSearchParams();

    return (
        <View
            className=""
        >
            <Text>{userName}</Text>
        </View>
    );
}

