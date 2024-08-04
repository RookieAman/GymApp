import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'
import { CourseCard, RoutineCard, CoachCard } from '../../../components'
import { LinearGradient } from 'expo-linear-gradient'

const renderFooter = () => (
  <View className="flex-1 bg-black">
    <View className="w-full px-3">
      <LinearGradient
        className="w-full h-[200px] bg-[#454545] rounded-xl relative justify-end items-center mt-4"
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,1)']}
      >
        <Pressable className="bg-white py-2 px-4 rounded-full items-center justify-center mb-10">
          <Text className="text-black text-lg font-bmedium">ver todo</Text>
        </Pressable>
      </LinearGradient>

      <View className="w-full my-4 mt-10 px-2 flex-row justify-between">
        <Text className="text-lg text-white font-bmedium">
          Descubre la rutina de...
        </Text>
        <Text className="text-base text-secondary font-bregular">ver todo</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RoutineCard propId={item.id} />}
      />

      <View className="w-full my-4 mt-10 px-2 flex-row justify-between">
        <Text className="text-lg text-white font-bmedium">
          Conoce los coaches
        </Text>
        <Text className="text-base text-secondary font-bregular">ver todo</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CoachCard propId={item.id} />}
      />

      <View className="w-full my-4 mt-10 px-2">
        <Text className="text-lg text-white font-bmedium">
          Crea tu propia rutina
        </Text>
      </View>

      <View className="w-full h-28 rounded-xl bg-[#181818]"></View>

      <View className="w-full my-4 mt-10 px-2">
        <Text className="text-lg text-white font-bmedium">Categorias</Text>
      </View>

      <View className="flex-row gap-2">
        <View className="w-full h-7 rounded-xl bg-[#181818]"></View>
        <View className="w-full h-7 rounded-xl bg-[#181818]"></View>
        <View className="w-full h-7 rounded-xl bg-[#181818]"></View>
      </View>
    </View>
  </View>
)

const AllCourses = () => {
  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard propId={item.id} />}
        ListEmptyComponent={() => (
          <Text className="text-3xl text-white">No courses found!</Text>
          // Make this a component and stylize it ---
        )}
        ListHeaderComponent={() => (
          <View className="flex my-2 mt-10 px-4 flex-row justify-between">
            <Text className="text-lg text-white font-bmedium">Novedades</Text>
            <Text className="text-base text-secondary font-bregular">
              ver todo
            </Text>
          </View>
        )}
        ListFooterComponent={renderFooter}
      />

      <StatusBar style="light" />
    </View>
  )
}

export default AllCourses
