import { View, Text } from 'react-native'
import React from 'react'

const ClassThumb = ({ duration, title, desc }) => {
  return (
    <View className="flex-row mb-5 px-4">
      <View className="w-[137px] h-20 bg-[#404040] mr-2 rounded-lg p-2 justify-end">
        <View
          className={`bg-[#8F8F8F] bg-opacity-50 rounded-[3px] px-1 self-end`}
        >
          <Text className="text-[9px] text-white">{duration}</Text>
        </View>
      </View>
      <View className="justify-around flex-1">
        <Text className="text-white font-bmedium text-xs">{title}</Text>
        <Text
          numberOfLines={4}
          className="text-white text-[10px] flex-shrink-1 mb-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna. consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </Text>
      </View>
    </View>
  )
}

export default ClassThumb
