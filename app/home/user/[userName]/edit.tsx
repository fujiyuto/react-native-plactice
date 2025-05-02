import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import { Title } from "@/components/Title";
import { CustomTextInput, NameInput } from "@/components/CustomTextInput";
import { CustomDatePicker } from "@/components/CustomDatePicker";
import { CustomSexInput } from "@/components/CustomPicker";
import { CustomActionButton } from "@/components/CustomButton";
import { userDetail } from "@/stab/user_detail";
import { UserEditRequest } from "@/types/user";

export default function Edit() {
    // ユーザー名
    const [userName, setUserName] = useState<string>('')
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


    useEffect(() => {
        // ユーザー詳細取得処理
        const data = userDetail

        // 取得したデータをフォームにセット
        setUserName(data.userName)
        setLastName(data.name.lastName)
        setFirstName(data.name.firstName)
        setBirthday(data.birthday)
        setSex(data.sex.value)
        setPhoneNumber(data.phoneNumber)
        setBodyHeight(data.bodyHeight.toString())
        setBodyWeight(data.bodyWeight.toString())
    }, [])

    // 会員情報編集処理
	const handleUserEdit = () => {
        const formData: UserEditRequest = {
            userName,
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
                                label="会員情報変更"
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
                        handleOnPress={handleUserEdit}
                        bgColor="bg-sky-300"
                        label="保存する"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
