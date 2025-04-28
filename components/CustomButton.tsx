import React from "react"
import { TouchableOpacity, Text } from "react-native"

interface ButtonProps {
    handleOnPress: () => void
    buttonStyle: string
    label: string
    labelStyle?: string
}

const BaseButton = ( props: ButtonProps ) => {
    const { handleOnPress, buttonStyle, label, labelStyle } = props

    return (
        <TouchableOpacity
            className={buttonStyle}
            onPress={handleOnPress}
            activeOpacity={0.7}
        >
            <Text className={labelStyle}>{label}</Text>
        </TouchableOpacity>
    )
}

interface CustomActionButtonProps {
    handleOnPress: () => void
    bgColor: string
    label: string
}

export const CustomActionButton = ( props: CustomActionButtonProps ) => {
    const { handleOnPress, bgColor, label } = props

    return (
        <BaseButton
            handleOnPress={handleOnPress}
            buttonStyle={`rounded-full ${bgColor}`}
            label={label}
            labelStyle="text-white text-2xl px-4 py-3 text-center"
        />
    )
}

