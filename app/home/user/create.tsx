import React from "react";
import { KeyboardAvoidingView, ScrollView, View, Platform} from "react-native";
import { CustomActionButton } from "@/components/CustomButton";
import { useState } from "react";
import { CustomTextInput, PasswordInput, NameInput } from "@/components/CustomTextInput";
import { CustomSexInput } from "@/components/CustomPicker";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { Title } from "@/components/Title";
import { UserCreateRequest } from "@/types/user";

export default function Create() {
	// ユーザー名
	const [userName, setUserName] = useState<string>('')
	// メールアドレス
	const [email, setEmail] = useState<string>('')
	// パスワード
	const [password, setPassword] = useState<string>('')
	// パスワード（確認用）
	const [passwordConfirm, setPasswordConfirm] = useState<string>('')
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
	const [bodyHeight, setBodyHeight] = useState<string>('')
	// 体重
	const [bodyWeight, setBodyWeight] = useState<string>('')

	// 新規登録処理
	const handleUserCreate = () => {
		const formData: UserCreateRequest = {
			userName,
			password,
			passwordConfirm,
			email,
			name: {
				lastName,
				firstName
			},
			birthday,
			sex,
			phoneNumber,
			bodyHeight: Number(bodyHeight),
			bodyWeight: Number(bodyWeight)
		}
	}

    return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{flex: 1, justifyContent: 'space-between'}}
			keyboardVerticalOffset={110}
		>
			<ScrollView>
				<View className="w-5/6 mx-auto h-full flex items-around gap-16 pt-8 pb-52">
					<View className="h-fit flex-col gap-4">
						<View>
							<Title
								label="会員情報入力"
							/>
						</View>
						<View className="w-full h-full flex-col justify-around gap-6">
							<CustomTextInput
								value={userName}
								handleOnChangeText={setUserName}
								placeholder="ユーザー名"
								textContentType="username"
								keyboardType="ascii-capable"
								returnKeyType="done"
							/>
							<CustomTextInput
								value={email}
								handleOnChangeText={setEmail}
								placeholder="メールアドレス"
								textContentType="emailAddress"
								keyboardType="email-address"
								returnKeyType="done"
							/>
							<PasswordInput
								value={password}
								handleOnChangeText={setPassword}
								placeholder="パスワード"
								keyboardType="ascii-capable"
								returnKeyType="done"
							/>
							<PasswordInput
								value={passwordConfirm}
								handleOnChangeText={setPasswordConfirm}
								placeholder="パスワード（確認用）"
								keyboardType="ascii-capable"
								returnKeyType="done"
							/>
							<NameInput
								handleChangeLastName={setLastName}
								handleChangeFirstName={setFirstName}
								returnKeyType="done"
								lastNameValue={lastName}
								firstNameValue={firstName}
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
								value={phoneNumber}
								handleOnChangeText={setPhoneNumber}
								placeholder="電話番号"
								textContentType="telephoneNumber"
								keyboardType="number-pad"
								returnKeyType="done"
							/>
							<CustomTextInput
								value={bodyHeight}
								handleOnChangeText={setBodyHeight}
								placeholder="身長"
								keyboardType="decimal-pad"
								returnKeyType="done"
							/>
							<CustomTextInput
								value={bodyWeight}
								handleOnChangeText={setBodyWeight}
								placeholder="体重"
								keyboardType="decimal-pad"
								returnKeyType="done"
							/>
							
						</View>
					</View>
					<CustomActionButton
						handleOnPress={handleUserCreate}
						bgColor="bg-sky-300"
						label="新規登録"
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
    );
}
