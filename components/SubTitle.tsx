import React from 'react'
import { Text } from 'react-native'

export const SubTitle = ( props: {label: string} ) => {
    return (
        <Text className="text-xl tracking-wider text-neutral-700">{props.label}</Text>
    )
}
