import React, { useState } from 'react'
import { TextInput, TouchableHighlight, View, Text, Pressable } from 'react-native'
import { getDateStringFromDate, getDateFromDateString } from '@/utils/FormatUtil'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

interface CustomDatePicker {
    value: string
    setStateFunc: React.Dispatch<React.SetStateAction<any>>
    placeholder: string
}

export const CustomDatePicker = ( props: CustomDatePicker ) => {
    const { value, setStateFunc, placeholder } = props

    // モーダル開閉
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    // 日付データを一時的に格納する変数
    const [tempDateData, setTempDateData] = useState<Date>(new Date())

    // ピッカーの値が変わる度に発火する処理
    const handleOnChangeDate = (event: DateTimePickerEvent, date: Date | undefined): void => {
        if ( date != undefined ) {
            setTempDateData(date)
        } else {
            setTempDateData(new Date())
        }
    }

    // Confirmボタンタップ時の処理
    const handlePressConfirm = (): void => {
        // 状態管理で保持しているDateの値と選択したDateの値が一致するか
        if ( getDateFromDateString(value) !== tempDateData ) {
            // 異なるなら状態管理で保持している値を更新
            setStateFunc(getDateStringFromDate(tempDateData))
        }
        setModalVisible(!modalVisible)
    }

    // Cancelボタンタップ時 & 背景タップ時の処理
    const handlePressCancel = (): void => {
        // 変更した日付の一時データを戻す
        if ( value !== '' ) {
            setTempDateData(getDateFromDateString(value))
        } else {
            setTempDateData(new Date())
        }

        // モーダルの開閉
        setModalVisible(!modalVisible)
    }

    return (
        <View>
            <TextInput
                className="h-14 w-full p-2 border-b border-neutral-300"
                placeholder={placeholder}
                placeholderTextColor='#a3a3a3'
                readOnly={true}
                value={value}
                onPress={() => setModalVisible(!modalVisible)}
                textContentType='birthdate'
            />
            <Modal
                isVisible={modalVisible}
                style={{
                    justifyContent: 'flex-end',
                    marginBottom: 32,
                    marginHorizontal: 8,
                    borderRadius: 30
                }}
                backdropOpacity={0.1}
            >
                <View className='flex gap-2 mb-4'>
                    <View className='bg-neutral-100 rounded-3xl flex items-center'>
                        <DateTimePicker
                            mode='date'
                            value={tempDateData}
                            locale='ja-JP'
                            display='spinner'
                            textColor='black'
                            onChange={handleOnChangeDate}
                        />
                        <TouchableHighlight
                            className='bg-neutral-100 rounded-b-3xl'
                            underlayColor='#d4d4d4'
                            onPress={handlePressConfirm}
                            style={{
                                width: '100%'
                            }}
                            activeOpacity={0.7}
                        >
                            <Text className='text-[#007AFF] text-2xl py-4 tracking-wider text-center'>Confirm</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight 
                        onPress={handlePressCancel}
                        className='rounded-xl'
                        underlayColor='#737373'
                        activeOpacity={0.7}
                        style={{
                            width: '100%',
                            backgroundColor: 'white'
                        }}
                    >
                        <Text className='text-[#007AFF] font-semibold bg-white text-2xl rounded-xl py-4 tracking-wider text-center'>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        </View>
    )
}