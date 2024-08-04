import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { colors } from '../../../constants'
import { Slot } from 'expo-router'

import AllCourses from './all-courses'
import MyCourses from './my-courses'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeLayout = () => {
  const [page, setPage] = useState({
    index: 0,
    routes: [
      { key: 'first', title: 'Todos los cursos' },
      { key: 'second', title: 'Mis cursos' },
    ],
  })

  const renderScene = SceneMap({
    first: AllCourses,
    second: MyCourses,
  })

  return (
    <>
      <View className="flex-1 bg-black">
        <View className="px-4 mt-16 flex-row justify-between">
          <Text className="text-white text-2xl font-bbold">Inicio</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-2xl mr-2">O</Text>
            <View className="rounded-full h-7 w-7 bg-[#D9D9D9]"></View>
          </View>
        </View>

        <TabView
          navigationState={page}
          renderScene={renderScene}
          onIndexChange={(index) => setPage({ ...page, index: index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          style={styles.container}
          renderTabBar={(props) => (
            <View style={{ alignItems: 'center', width: '100%' }}>
              <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                style={styles.tabBar}
                renderLabel={({ route, focused }) => (
                  <Text
                    className={`text-white text-xs font-bregular ${
                      focused ? 'text-secondary' : ''
                    }`}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                  >
                    {route.title}
                  </Text>
                )}
              />
            </View>
          )}
        />
        {/* Slot aqui */}
      </View>
      {/* <Slot /> */}
      {/* Esto lo he puesto ahora porque me lo has dicho, pero me divide la pantalla en dos... */}
    </>
  )
}

export default HomeLayout

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  tabBar: {
    width: '60%',
    backgroundColor: 'black',
  },
  indicator: {
    backgroundColor: colors.secondary,
    height: 2,
    position: 'absolute',
    bottom: 0,
  },
})
