import React from "react";
import { KeyboardAvoidingView, ScrollView, TextInput, View, StyleSheet, Platform, Text } from "react-native";
import { Link, useRouter } from "expo-router";
import { CustomActionButton } from "@/components/CustomButton";
import { useState } from "react";
import { CustomTextInput, PasswordInput, NameInput } from "@/components/CustomTextInput";
import { CustomSexInput } from "@/components/CustomPicker";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { Title } from "@/components/Title";

export default function Create() {
	const router = useRouter()

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
								handleOnChangeText={setUserName}
								placeholder="ユーザー名"
								textContentType="username"
								keyboardType="ascii-capable"
								returnKeyType="done"
							/>
							<CustomTextInput
								handleOnChangeText={setEmail}
								placeholder="メールアドレス"
								textContentType="emailAddress"
								keyboardType="email-address"
								returnKeyType="done"
							/>
							<PasswordInput
								handleOnChangeText={setPassword}
								placeholder="パスワード"
								keyboardType="ascii-capable"
								returnKeyType="done"
							/>
							<NameInput
								handleChangeLastName={setLastName}
								handleChangeFirstName={setFirstName}
								returnKeyType="done"
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
								keyboardType="number-pad"
								returnKeyType="done"
							/>
							<CustomTextInput
								handleOnChangeText={setBodyHeight}
								placeholder="身長"
								keyboardType="decimal-pad"
								returnKeyType="done"
							/>
							<CustomTextInput
								handleOnChangeText={setBodyWeight}
								placeholder="体重"
								keyboardType="decimal-pad"
								returnKeyType="done"
							/>
							
						</View>
					</View>
					{/* <View>
						
					</View> */}
					<CustomActionButton
						handleOnPress={() => router.navigate('/home/user/create')}
						bgColor="bg-sky-300"
						label="新規登録"
					/>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	inner: {
		padding: 24,
	  	flex: 1,
	  	justifyContent: 'space-around'
	},
	header: {
	  fontSize: 36,
	  marginBottom: 48,
	},
	textInput: {
	  height: 40,
	  borderColor: '#000000',
	  borderBottomWidth: 1,
	  marginBottom: 36,
	},
	btnContainer: {
	  backgroundColor: 'white',
	  marginTop: 12,
	},
  });

