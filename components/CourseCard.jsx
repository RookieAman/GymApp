import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const CourseCard = ({ propId }) => {
  const router = useRouter()

  const handleGoToCourseDetail = (courseId) => {
    console.log(courseId)
    // router.push(`/home/${courseId}`)
    router.push(`/(tabs)/routines`)
  }

  return (
    <View className="flex flex-col items-center px-4 mt-4">
      <View className="flex flex-row gap-3 items-start">
        <Pressable
          onPress={() => handleGoToCourseDetail(propId)}
          className="w-full h-[500px] bg-[#454545] rounded-xl relative justify-end items-start p-4"
        >
          <View className="gap-3 mb-4">
            <View className="bg-[#8F8F8F] bg-opacity-50 rounded-[3px] px-2 self-start">
              <Text className="text-xs text-white">8 clases · 40 min</Text>
            </View>
            <Text className="text-2xl text-white font-bextrabold uppercase">
              Brazilian Jiu-Jitsu - Escapes
            </Text>
            <View className="flex-row justify-start items-center">
              <View className="w-8 h-8 rounded-full bg-white mr-2"></View>
              <View className="items-start justify-center">
                <Text className="text-xs text-secondary">Nombre Coach</Text>
                <Text className="text-xs text-secondary">Coach</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default CourseCard
