import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'

const Community = () => {
  const router = useRouter()

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-2xl font-bmedium">Community page!</Text>
      {/* <Pressable onPress={router.push('/home/Community')}>
        <Text className="text-3xl text-white">Pressme</Text>
      </Pressable> */}
    </View>
  )
}

export default Community
