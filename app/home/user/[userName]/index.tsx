import { Pressable, Text, View } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { userDetail } from "@/stab/user_detail";
import { useEffect } from "react";
import { Title } from "@/components/Title";
import React from "react";


export default function Detail() {
    const router = useRouter()

    // ユーザー名
    const { userName } = useLocalSearchParams();

    // ユーザー詳細取得処理
    useEffect(() => {

    }, [])

    const renderItem = () => {

    }

    return (
        <View
            className="w-5/6 mx-auto gap-4 pt-4"
        >
            <Title
                label="会員情報詳細"
            />
            <View className="gap-6">
                <View>
                    <View className="w-fit">
                        <Text className="text-md">メールアドレス</Text>
                        <Text className="text-xl">{userDetail.email}</Text>
                    </View>
                    <Pressable
                        onPress={() => router.navigate('/home/user/changeEmail')}
                        className="border-b w-fit ml-auto px-2"
                    >
                        <Text className="text-lg">メールアドレス変更</Text>
                    </Pressable>
                </View>
                <View className="gap-2">
                    <View className="w-fit">
                        <Text className="text-md">ユーザー名</Text>
                        <Text className="text-xl">{userDetail.userName}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">名前</Text>
                        <Text className="text-xl">{userDetail.name.lastName} {userDetail.name.firstName}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">性別</Text>
                        <Text className="text-xl">{userDetail.sex.label}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">生年月日</Text>
                        <Text className="text-xl">{userDetail.birthday}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">電話番号</Text>
                        <Text className="text-xl">{userDetail.phoneNumber}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">身長</Text>
                        <Text className="text-xl">{userDetail.bodyHeight}</Text>
                    </View>
                    <View className="w-fit">
                        <Text className="text-md">体重</Text>
                        <Text className="text-xl">{userDetail.bodyWeight}</Text>
                    </View>
                    <Pressable
                        onPress={() => router.navigate('/home/user/[userName]/edit')}
                        className="border-b w-fit ml-auto px-2"
                    >
                        <Text className="text-lg">会員情報変更</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

