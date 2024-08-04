import React from 'react'
import { View, Text } from 'react-native'
import { useSearchParams } from 'expo-router'

const CourseDetail = () => {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-2xl font-bmedium">
        Detalles del curso con ID: {useSearchParams}
      </Text>
    </View>
  )
}

export default CourseDetail
