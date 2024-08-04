import { View, Text } from 'react-native'
import React from 'react'

const CourseThumb = ({ isCompleted }) => {
  return (
    <View className="flex-row mb-5">
      <View className="w-[137px] h-20 bg-[#404040] mr-2 rounded-lg p-2 justify-between">
        <View
          className={`bg-[#8F8F8F] bg-opacity-50 rounded-[3px] px-1 self-start ${
            isCompleted ? '' : 'opacity-0'
          }`}
        >
          <Text className="text-[9px] text-white">Completado</Text>
        </View>
        <View className={`w-full flex-row ${isCompleted ? 'opacity-0' : ''}`}>
          <View className="w-1/3 h-[2px] bg-secondary"></View>
          <View className="w-2/3 h-[2px] bg-white"></View>
        </View>
      </View>
      <View className="justify-around flex-1">
        <Text className="text-white font-bmedium text-xs">
          Nombre del curso
        </Text>
        <Text
          numberOfLines={3}
          className="text-white text-[10px] flex-shrink-1 mb-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna...
        </Text>
        <Text className="text-white text-[9px]">45 min · 10 clases</Text>
      </View>
    </View>
  )
}

export default CourseThumb
