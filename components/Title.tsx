import React from 'react'
import { Text } from 'react-native'

export const Title = ( props: {label: string} ) => {
    return (
        <Text className="text-2xl tracking-wider">{props.label}</Text>
    )
}
