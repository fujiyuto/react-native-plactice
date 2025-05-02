import { KeyboardAvoidingView, Platform, View, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, Button, Text } from "react-native";
import { useRouter } from "expo-router";
import { CustomActionButton } from "@/components/CustomButton";
import React from "react";
import { CustomTextInput } from "@/components/CustomTextInput";

export default function Index() {
	const router = useRouter()

    return (
        <View
			className="flex justify-center items-center h-full"
        >
			<View className="w-1/2 flex-col gap-4">
				<CustomActionButton
					handleOnPress={() => router.navigate('/home/user/create')}
					bgColor="bg-sky-300"
					label="新規登録"
				/>
				<CustomActionButton
					handleOnPress={() => router.navigate('/home/user/login')}
					bgColor="bg-neutral-300"
					label="ログイン"
				/>
				<CustomActionButton
					handleOnPress={() => router.navigate('/home')}
					bgColor="bg-neutral-300"
					label="ホーム"
				/>
				<CustomActionButton
					handleOnPress={() => router.navigate('/home/user/forgotPwd')}
					bgColor="bg-neutral-300"
					label="パスワード忘れ"
				/>
				<CustomActionButton
					handleOnPress={() => router.navigate('/home/user/test')}
					bgColor="bg-neutral-300"
					label="会員情報"
				/>
			</View>
			
        </View>
    );
}


