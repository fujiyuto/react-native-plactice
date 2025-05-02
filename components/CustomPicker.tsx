import React, { useState } from 'react'
import { Picker, PickerProps, PickerItemProps } from '@react-native-picker/picker'
import { Sex } from '@/constants/Sex'
import { SegmentValue, SegmentValuesForFront } from '@/types/common'
import { View, Text, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import Modal from 'react-native-modal';

interface CustomPickerProps {
    value: string
    setStateFunc: React.Dispatch<React.SetStateAction<any>>
    placeholder: string
    pickerItems: SegmentValuesForFront
}

const CustomInputPicker = ( props: CustomPickerProps ) => {
    const { value, setStateFunc, placeholder, pickerItems } = props

    // モーダル表示/非表示
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    // 入力データの一時変数
    const [tempData, setTempData] = useState<string>('')

    // ピッカーのリスト作成
    const pickerItemList = pickerItems.parameters.map((item: SegmentValue, index: number): React.ReactNode => {
        return (
            <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
                color='#0a0a0a'
            />
        )
    })

    // Cancelボタンタップ時 & 背景タップ時の処理
    const handlePressCancel = (): void => {
        setTempData(value)
        setModalVisible(!modalVisible)
    }

    // 入力インプット項目をクリックした時
    const handlePressInput = (): void => {
        // 初回入力時の未選択の場合、クリック時に選択肢の一番上を入力するように
        if ( value === '' ) {
            setTempData(pickerItems.parameters[0].value)
        } else {
            setTempData(value)
        }
        setModalVisible(!modalVisible)
    }

    // Confirmボタンタップ時の処理
    const handlePressConfirm = () => {
        if ( tempData !== value ) {
            setStateFunc(tempData)
        }
        setModalVisible(!modalVisible)
    }
    
    return (
        <View>
            <TextInput
                className="h-14 w-full p-2 border-b border-neutral-300"
                placeholder={placeholder}
                placeholderTextColor='#a3a3a3'
                readOnly={true}
                value={pickerItems.getLabelByValue(value)}
                onPress={handlePressInput}
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
                useNativeDriver
            >
                <View className='flex gap-2'>
                    <View className='bg-neutral-100 rounded-3xl'>
                        <Picker
                            selectedValue={tempData}
                            onValueChange={(itemValue, itemIndex) => setTempData(itemValue)}
                        >
                            {pickerItemList}
                        </Picker>
                        <TouchableHighlight
                            className='bg-neutral-100 rounded-b-3xl'
                            underlayColor='#d4d4d4'
                            onPress={handlePressConfirm}
                            style={{
                                width: '100%'
                            }}
                            activeOpacity={0.7}
                        >
                            <Text 
                                className='text-[#007AFF] text-2xl py-4 tracking-wider text-center'
                            >Confirm</Text>
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
                        <Text 
                            className='text-[#007AFF] font-semibold bg-white text-2xl rounded-xl py-4 tracking-wider text-center'
                        >Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        </View>
    )
}

// 性別入力
interface CustomSexInputProps extends Omit<CustomPickerProps,'pickerItems'> {}

export const CustomSexInput = ( props: CustomSexInputProps ) => {

    return (
        <CustomInputPicker
            pickerItems={Sex}
            {...props}
        />
    )
}
