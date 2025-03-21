import { View, Text } from 'react-native'
import React from 'react'

const DotComponent = ({selected}) => {
    return (
      <View className={`w-4 h-4 flex items-center justify-center
          rounded-full ${selected ? "border border-green-600":""}
          p-2`}>

            <View className={`w-2 h-2 ${selected ? "bg-[#44e76d]" : "bg-green-300"} rounded-full`}>

            </View>
          </View>
    )
  }

export default DotComponent