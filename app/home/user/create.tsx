import React from "react";
import { StyleSheet, Text, View, Button, useColorScheme, TextInput, Modal, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { CustomActionButton } from "@/components/CustomButton";
import { useState } from "react";
import { CustomTextInput, PasswordInput, NameInput } from "@/components/CustomTextInput";
import { CustomSexInput } from "@/components/CustomPicker";
import { CustomDatePicker } from "@/components/CustomDatePicker";

export default function Create() {
	const router = useRouter()

	const [open, setOpen] = useState<boolean>(false)  // 生年月日のdate-picker用

	// ユーザー名
	const [userName, setUserName] = useState<string>('')
	// メールアドレス
	const [email, setEmail] = useState<string>('')
	// パスワード
	const [password, setPassword] = useState<string>('')
	// 姓
	const [lastName, setLastName] = useState<string>('')
	// 名
	const [firstName, setFirstName] = useState<string>('')
	// 生年月日
	const [birthday, setBirthday] = useState<string>('')
	// 性別
	const [sex, setSex] = useState<string>('')
	// 電話番号
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	// 身長
	const [bodyHeight, setBodyHeight] = useState<number>(0.0)
	// 体重
	const [bodyWeight, setBodyWeight] = useState<number>(0.0)

	// ユーザー登録フック
	const handleUserCreate = () => {}

    return (
        <View
			className="mx-auto w-5/6 h-full flex justify-center items-center"
		>
            <View className="w-full my-3 flex-col gap-4">
				<CustomTextInput
					handleOnChangeText={setUserName}
					placeholder="ユーザー名"
					textContentType="username"
				/>
				<CustomTextInput
					handleOnChangeText={setEmail}
					placeholder="メールアドレス"
					textContentType="emailAddress"
				/>
				<PasswordInput
					handleOnChangeText={setPassword}
					placeholder="パスワード"
				/>
				<NameInput
					handleChangeLastName={setLastName}
					handleChangeFirstName={setFirstName}
				/>
				<CustomDatePicker
					value={birthday}
					setStateFunc={setBirthday}
					placeholder="生年月日"
				/>
				<CustomSexInput
					value={sex}
					setStateFunc={setSex}
					placeholder="性別"
				/>
				<CustomTextInput
					handleOnChangeText={setPhoneNumber}
					placeholder="電話番号"
					textContentType="telephoneNumber"
				/>
				<CustomTextInput
					handleOnChangeText={setBodyHeight}
					placeholder="身長"
					textContentType="telephoneNumber"
				/>
				<CustomTextInput
					handleOnChangeText={setBodyWeight}
					placeholder="体重"
					textContentType="telephoneNumber"
				/>

			</View>
			<CustomActionButton
				handleOnPress={() => router.navigate('/home/user/create')}
				bgColor="bg-sky-300"
				label="新規登録"
			/>
        </View>
    );
}


