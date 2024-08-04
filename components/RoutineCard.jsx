import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const RoutineCard = ({ propId }) => {
  return (
    <View className="mr-3 items-center">
      <Pressable>
        <LinearGradient
          className="w-64 h-60 rounded-3xl bg-[#A6A6A6] relative justify-between items-start p-4"
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.5)', '#464646']}
        >
          <View className="rounded-full w-5 h-5 bg-[#D9D9D9] self-end justify-center items-center"></View>
          <View className="mb-2">
            <Text className="text-base text-white font-bextrabold uppercase">
              Explosive Power Drills
            </Text>
            <Text className="text-base text-secondary uppercase mb-1">
              Nombre Coach
            </Text>
            <View className="bg-[#8F8F8F] bg-opacity-50 px-2 py-0.5 rounded self-start">
              <Text className="text-xs text-white">
                40 min · Intermedio · Conditioning
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  )
}

export default RoutineCard
