import React, { useState } from 'react'
import { CustomTextInput } from '@/components/CustomTextInput'
import { Text, View } from 'react-native'
import { CustomActionButton } from '@/components/CustomButton'
import { SubTitle } from '@/components/SubTitle'

const forgotPwd = () => {
    const [email, setEmail] = useState<string>('')

    // パスワード変更メール送信
    const handleSendEmail = () => {

    }

    return (
        <View className='w-5/6 mx-auto h-full flex gap-10 pt-16'>
            <SubTitle
                label='パスワードリセットメール送信'
            />
            <View className='gap-12'>
                <CustomTextInput
                    handleOnChangeText={setEmail}
                    placeholder="メールアドレス"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    returnKeyType="done"
                />
                <CustomActionButton
                    handleOnPress={handleSendEmail}
                    bgColor="bg-sky-300"
                    label="メール送信"
                />
            </View>
        </View>
    )
}

export default forgotPwd