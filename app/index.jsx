import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  Animated,
  Easing,
} from 'react-native'
import { CustomButton } from '../components'
import { images } from '../constants'
import { Link, router } from 'expo-router'
import { useEffect, useRef, useState } from 'react'
import LoginModal from '../components/LoginModal'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const animatedValue = useRef(new Animated.Value(0)).current

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  // Logo animation effect on modal open/close
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isModalVisible ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start()
  }, [isModalVisible])

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -180],
  })

  return (
    <View className="bg-primary h-full">
      <ImageBackground
        style={{ flex: 1, justifyContent: 'center' }}
        source={images.loginBg}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className="w-full h-full px-4 justify-center items-center">
            <Animated.Text
              style={{ transform: [{ translateY }] }}
              className="text-3xl text-white font-bbold mt-auto"
            >
              Logo
            </Animated.Text>
            <View className="mt-auto w-full">
              <Text className="text-white text-center font-bbold text-xl">
                {`Aprende de los \nprofesionales de las MMA`}
              </Text>
              <Text className="text-white text-center mt-2">
                Entrena como un profesional. Consigue acceso a cursos exclusivos
                de entrenadores y luchadores de MMA reconocidos en todo el
                mundo.
              </Text>
              <CustomButton
                title="Crea una cuenta"
                handlePress={() => router.push('/sign-up')}
                containerStyles="w-full mt-8"
              />
              <View className="w-100 flex flex-row justify-center mt-3 mb-12">
                <Text className="text-white">¿Ya tienes una cuenta? </Text>
                <Pressable onPress={() => setIsModalVisible(true)}>
                  <Text className="text-secondary">Inicia sesión</Text>
                </Pressable>
              </View>
            </View>
            <LoginModal
              isVisible={isModalVisible}
              onClose={onModalClose}
              setIsModalVisible={setIsModalVisible}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  )
}
