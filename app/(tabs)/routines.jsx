import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, ClassThumb } from '../../components'

const Routines = () => {
  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={[
          {
            id: 1,
            duration: '10 min',
            title: '1 . Introducción a los BJJ escapes',
          },
          {
            id: 2,
            duration: '10 min',
            title: '2 . Introducción a los BJJ escapes',
          },
          {
            id: 3,
            duration: '10 min',
            title: '3 . Introducción a los BJJ escapes',
          },
          {
            id: 4,
            duration: '10 min',
            title: '4 . Introducción a los BJJ escapes',
          },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClassThumb
            duration={item.duration}
            title={item.title}
            propId={item.id}
          />
        )}
        ListHeaderComponent={() => (
          <>
            <LinearGradient
              className="w-full h-[700px] bg-gray-500 rounded-xl relative justify-end items-center"
              // Background Linear Gradient
              colors={['transparent', 'rgba(0,0,0,1)']}
              locations={[0.5, 0.8]}
            >
              <View className="w-full">
                <Text className="font-bextrabold text-white text-2xl text-center uppercase mb-10">
                  Brazilian Jiu-Jitsu - Escapes
                </Text>
                <View className="px-10">
                  <CustomButton
                    title={'Comprar curso - 30€'}
                    containerStyles={'mb-2'}
                  />
                  <CustomButton
                    title={'Ver trailer'}
                    containerStyles={'mb-8 bg-black border-secondary border'}
                    textStyles={'text-secondary'}
                  />
                </View>
              </View>
            </LinearGradient>
            <Text className="text-white text-xs text-center mb-10">
              4 clases · 3 h 52 min de duración total
            </Text>
            <View className="px-4 pb-6 border-b-2 border-gray-600 mb-8">
              <Text className="text-white text-base font-bmedium mb-6">
                Sobre este curso
              </Text>

              <View className="flex-row justify-between mb-5">
                <View className="flex-row items-center">
                  <View className="rounded-full w-10 h-10 bg-secondary mr-3"></View>
                  <View className="justify-center">
                    <Text className="text-base text-white font-bmedium">
                      Nombre Coach
                    </Text>
                    <Text className="text-base text-white">
                      Breve curriculum
                    </Text>
                  </View>
                </View>
                <View className="justify-center">
                  <View className="border border-secondary rounded-2xl items-center justify-center">
                    <Text className="text-secondary font-bregular py-2 px-2">
                      + comuinidad
                    </Text>
                  </View>
                </View>
              </View>

              <Text className="text-white text-xs mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna...
              </Text>

              <Text className="text-secondary font-bregular text-xs text-center">
                Leer todo
              </Text>
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="pb-6 border-b-2 border-gray-600 mb-8"></View>
        )}
      />
    </View>
  )
}

export default Routines
