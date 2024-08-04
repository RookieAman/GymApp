import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CourseThumb } from '../../../components'

const MyCourses = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="w-full flex-row justify-between mt-10 px-4 mb-10">
        <View className="border border-white rounded-2xl px-2 py-1.5">
          <Text className="text-white font-bregular">Categorias v</Text>
        </View>
        <View className="justify-center">
          <View className="border border-[#181818] bg-[#181818] rounded-2xl px-2">
            <Text className="text-white py-1">= Filtrar</Text>
          </View>
        </View>
      </View>

      <View className="w-full px-4">
        <FlatList
          data={[
            { id: 1, isCompleted: true },
            { id: 2, isCompleted: false },
            { id: 3, isCompleted: false },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseThumb isCompleted={item.isCompleted} propId={item.id} />
          )}
          ListEmptyComponent={() => (
            <Text className="text-3xl text-white">No courses found!</Text>
            // Make this a component and stylize it ---
          )}
          // ListHeaderComponent={() => (
          //   // Test with video play length
          //   <View className="flex-row mb-5">
          //     <View className="w-36 h-20 bg-red-300 mr-3 rounded-lg"></View>
          //     <View className="justify-around">
          //       <Text className="text-white font-bmedium text-xs">
          //         CourseThumb
          //       </Text>
          //       <Text className="text-white text-xs flex-wrap">
          //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          //         do eiusmod tempor incididunt ut labore et dolore magna...
          //       </Text>
          //       <Text className="text-white text-[9px]">CourseThumb</Text>
          //     </View>
          //   </View>
          // )}
          ListFooterComponent={() => (
            <FlatList
              style={{ marginBottom: 100 }}
              data={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row mb-5">
                  <View className="w-[137px] h-20 bg-[#404040] mr-2 rounded-lg p-2"></View>
                  <View className="justify-around flex-1">
                    <Text className="text-white font-bmedium text-xs">
                      Nombre del curso
                    </Text>
                    <Text
                      numberOfLines={3}
                      className="text-white text-[10px] flex-shrink-1 mb-2"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna...
                    </Text>
                    <Text className="text-white text-[9px]">
                      45 min · 10 clases
                    </Text>
                  </View>
                </View>
              )}
            />
          )}
        />
      </View>
    </View>
  )
}

export default MyCourses
