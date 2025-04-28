import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View>
            <Text>aaa</Text>
            <Link href="/home/user/takako">Go to User Detail</Link>
        </View>
    );
}


