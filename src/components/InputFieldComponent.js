import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function InputFieldComponent({ placeholder, keyboardType = 'default', secureTextEntry }) {
    return (
        <View
            style={{
                borderBottomColor: '#EAECEE',
                borderBottomWidth: 1,
                marginBottom: 14
            }}
        >
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#858687ff"
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                selectionColor={'black'}
                style={{
                    color: 'black',   // 👈 Add this
                    paddingVertical: 8,
                    fontSize: 16
                }}
            />
        </View>
    )
}