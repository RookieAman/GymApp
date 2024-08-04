import { View, Text, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import { CustomHeader } from '../../components'
import { BlurView } from 'expo-blur'

const TabIcon = ({ name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 pt-2">
      <View
        className={`${
          focused ? 'border-4' : 'border'
        } rounded-full border-solid border-white w-6 h-6`}
      ></View>
      <Text
        className={`${
          focused ? 'font-bold' : 'font-normal'
        } text-xs text-white`}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 90,
            position: 'absolute',
          },
          tabBarBackground: () => (
            <BlurView
              intensity={80}
              style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                backgroundColor: 'transparent',
              }}
              tint="dark"
            />
          ),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Cursos',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Cursos" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="community"
          options={{
            title: 'Comunidad',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Comunidad" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="routines"
          options={{
            title: 'Rutinas',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Rutinas" focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
