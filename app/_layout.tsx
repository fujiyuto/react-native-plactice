import React, { createContext, useState } from "react";
import { Stack } from "expo-router";
import "@/global.css";
import { SafeAreaView, StyleSheet, useColorScheme, Text, View } from "react-native";

const OverlayContext = createContext(false)

export default function RootLayout({ children }: {children: React.ReactNode}) {
    const colorScheme = useColorScheme()

    const safeAreaColor: string  = 'bg-[#fff] flex-1'
    // const safeAreaColor: string  = `flex-1 ${colorScheme === 'dark' ? '#0a0a0a' : '#fff'}`
    const contentBGColor: string = '#fff'
    // const headerBGColor: string  = colorScheme === 'dark' ? '#0a0a0a' : '#fff'
    // const contentBGColor: string = colorScheme === 'dark' ? '#0a0a0a' : '#fff'

    return (
        <SafeAreaView className={safeAreaColor}>
            <Stack
                screenOptions={{
                    headerTintColor: '#7d7d7d',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    contentStyle: {
                        backgroundColor: contentBGColor,
                        flex: 1
                    },
                    headerShown: false,
                    
                }}
            >
                
                <Stack.Screen 
                    name="index" 
                    options={{ 
                        title: 'トップ'
                    }}
                />
                <Stack.Screen 
                    name="home" 
                    options={{ 
                        title: 'ホーム',
                        headerShown: false
                    }}
                />
                
            </Stack>
        </SafeAreaView>
        
    )
}
