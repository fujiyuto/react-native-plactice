import { StyleSheet, Text, View, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Create() {
	const router = useRouter()
    return (
        <View>
            <Text>User Login</Text>
            <Button
              	title="ログイン"
            />
			<Button
				title="戻る"
				onPress={() => router.replace("/")}
			/>
        </View>
    );
}


