import { Stack, useRouter } from "expo-router";
import "@/global.css";
import { SafeAreaView, StyleSheet, useColorScheme, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeLayout({ children }: {children: React.ReactNode}) {
    const router = useRouter()

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
                    // headerStyle: {
                    //     backgroundColor: headerBGColor
                    // },
                    contentStyle: {
                        backgroundColor: contentBGColor
                    }
                }}
            >
                <Stack.Screen 
                    name="index" 
                    options={{ 
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="user/[userName]/index" 
                    options={{ 
                        title: 'プロフィール'
                    }}
                />
                <Stack.Screen 
                    name="user/[userName]/edit" 
                    options={{ 
                        title: 'プロフィール編集'
                    }}
                />
                <Stack.Screen 
                    name="user/create" 
                    options={{
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => router.back()}
                                className="pl-2"
                            >
                                <Text className="text-2xl text-neutral-600">{'<'}</Text>
                            </TouchableOpacity>
                        ),
                        headerTitle: ''
                    }}
                />
            </Stack>
        </SafeAreaView>
    )
}
