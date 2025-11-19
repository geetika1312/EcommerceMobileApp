import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FullRoundButtonComp({image, bg}) {
  return (
    <TouchableOpacity>
      <View
      style={{
        backgroundColor: bg,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
      }}
    >
      <Image 
        style={{
          width: 20,
          height: 20
        }}
        source={image}/>
    </View>
    </TouchableOpacity>
  )
}