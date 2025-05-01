import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Title } from "@/components/Title";
import { CustomTextInput, PasswordInput } from "@/components/CustomTextInput";
import { CustomActionButton } from "@/components/CustomButton";

export default function Create() {
	const router = useRouter()

    // ユーザー名
    const [userName, setUserName] = useState<string>('')
    // パスワード
    const [password, setPassword] = useState<string>('')

    // ログイン処理
    const handleLogin = () => {

    }
    
    return (
        <View className="w-5/6 mx-auto h-full flex gap-10 pt-16">
            <View className="w-full flex gap-6">
                <View>
                    <Title
                        label="ログイン"
                    />
                </View>
                <CustomTextInput
                    handleOnChangeText={setUserName}
                    placeholder="ユーザー名"
                    textContentType="username"
                    keyboardType="ascii-capable"
                    returnKeyType="done"
                />
                <PasswordInput
                    handleOnChangeText={setPassword}
                    placeholder="パスワード"
                    keyboardType="ascii-capable"
                    returnKeyType="done"
                />                
            </View>
            <View className="gap-6">
                <TouchableOpacity
                    onPress={() => router.navigate('/home/user/forgotPwd')}
                    activeOpacity={0.8}
                >
                    <Text 
                        className="text-center text-neutral-500"
                    >パスワードをお忘れですか？</Text>
                </TouchableOpacity>
                <CustomActionButton
                    handleOnPress={handleLogin}
                    bgColor="bg-sky-300"
                    label="ログイン"
                />
            </View>
        </View>
    );
}


