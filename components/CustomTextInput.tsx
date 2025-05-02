import React, { useState } from "react"
import { TextInput, TextInputProps, TouchableOpacity, View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

interface CustomTextInputProps extends TextInputProps {
    handleOnChangeText: React.Dispatch<React.SetStateAction<any>>
}

// ベースのテキスト入力用
export const CustomTextInput = ( { handleOnChangeText, ...props }: CustomTextInputProps ) => {

    return (
        <TextInput
            className="h-14 w-full p-2 border-b border-neutral-300"
            onChangeText={(text: string): void => handleOnChangeText(text)}
            placeholderTextColor='#a3a3a3'
            {...props}
        />
    )
}

// パスワード入力用
export const PasswordInput = ( { handleOnChangeText, ...props }: CustomTextInputProps ) => {
    
    const [secure, setSecure] = useState<boolean>(true)
    const [eyeOff, setEyeOff] = useState<boolean>(true)

    const handlePressVisible = (): void => {
        setSecure(!secure)
        setEyeOff(!eyeOff)
    }

    return (
        <View className="flex-row border-b border-neutral-300">
            <View className="w-11/12">
                <TextInput
                    className="h-14 p-2"
                    onChangeText={handleOnChangeText}
                    placeholderTextColor='#a3a3a3'
                    secureTextEntry={secure}
                    {...props}
                />
            </View>
            <TouchableOpacity
                className="flex justify-center"
                onPress={handlePressVisible}
                activeOpacity={0.7}
            >
                {
                    !eyeOff && (
                        <Ionicons name="eye" size={18} color='#404040'/>
                    )
                }
                {
                    eyeOff && (
                        <Ionicons name="eye-off" size={18} color='#a3a3a3'/>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}

interface NameInputProps extends Omit<CustomTextInputProps, 'handleOnChangeText'> {
    handleChangeLastName: React.Dispatch<React.SetStateAction<string>>
    handleChangeFirstName: React.Dispatch<React.SetStateAction<string>>
    lastNameValue: string
    firstNameValue: string
}

// 名前入力用
export const NameInput = ( { handleChangeLastName, handleChangeFirstName, lastNameValue, firstNameValue, ...props }: NameInputProps ) => {
    return (
        <View className="flex flex-row">
            <View className="w-1/2 pr-[8]">
                <TextInput
                    value={lastNameValue}
                    className="h-14 p-2 border-b border-neutral-300"
                    textContentType="familyName"
                    placeholder="姓"
                    placeholderTextColor='#a3a3a3'
                    onChangeText={(text: string): void => handleChangeLastName(text)}
                    {...props}
                />
            </View>
            <View className="w-1/2 pl-[8]">
                <TextInput
                    value={firstNameValue}
                    className="h-14 p-2 border-b border-neutral-300"
                    textContentType="name"
                    placeholder="名"
                    placeholderTextColor='#a3a3a3'
                    onChangeText={(text: string): void => handleChangeFirstName(text)}
                    {...props}
                />
            </View>
        </View>
    )
}
