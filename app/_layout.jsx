import { StyleSheet, Text, View } from 'react-native'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Benzin-ExtraBold': require('../assets/fonts/Benzin-ExtraBold.ttf'),
    'Benzin-Bold': require('../assets/fonts/Benzin-Bold.ttf'),
    'Benzin-Semibold': require('../assets/fonts/Benzin-Semibold.ttf'),
    'Benzin-Regular': require('../assets/fonts/Benzin-Regular.ttf'),
    'Benzin-Medium': require('../assets/fonts/Benzin-Medium.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  if (!fontsLoaded && !error) return null

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default RootLayout
