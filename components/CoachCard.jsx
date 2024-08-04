import { View, Text } from 'react-native'
import React from 'react'

const CoachCard = ({ propId }) => {
  return (
    <View className="mr-3 items-center">
      <View className="w-28 h-28 rounded-full bg-[#454545]"></View>
      <Text className="text-white text-base font-bregular my-4">Nombre</Text>
    </View>
  )
}

export default CoachCard
