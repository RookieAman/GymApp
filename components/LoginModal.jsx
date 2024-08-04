import { Modal, Text, View, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FormField from './FormField'
import CustomButton from './CustomButton'
import SocialButton from './SocialButton'
import { router } from 'expo-router'

const LoginModal = ({ isVisible, onClose, setIsModalVisible }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    setIsModalVisible(false)
    router.push('/(tabs)/home')
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View className="h-[75%] w-full bg-white rounded-tl-xl rounded-tr-xl absolute bottom-0">
        <View className="h-[10%] bg-white rounded-tl-xl rounded-tr-xl px-5 flex-row items-center justify-between">
          <Pressable onPress={onClose}>
            <Text>X</Text>
          </Pressable>
          <Text className="text-secondary text-lg">Inicia sesión</Text>
        </View>
        <View className="px-5">
          <Text className="text-2xl font-bmedium text-center mb-5">
            Bienvenid@ de nuevo,
          </Text>
          <Text className="text-[#A6A6A6] text-center mb-7">
            Introduce tu correo electrónico y contraseña y sigue aprendiendo con
            los mejores.
          </Text>
          <FormField
            title="Correo electrónico"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e })
            }}
            otherStyles="mb-2"
            keyboardType="email-adress"
          />
          <FormField
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e })
            }}
            otherStyles="mb-2"
            keyboardType="password"
          />

          <CustomButton
            title={'Continuar'}
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles={'mb-8'}
          />

          {/* Separator */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-[1px] bg-[#ACACAC]" />
            <View>
              <Text className="px-2 text-center text-[#ACACAC]">o</Text>
            </View>
            <View className="flex-1 h-[1px] bg-[#ACACAC]" />
          </View>

          <SocialButton
            title={'Continuar con Google'}
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles={'mb-2'}
            social={'googleIcon'}
          />
          <SocialButton
            title={'Continuar con Apple'}
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles={'mb-2'}
            social={'appleIcon'}
          />
          <SocialButton
            title={'Continuar con Facebook'}
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles={'mb-10'}
            social={'facebookIcon'}
          />
        </View>
      </View>
    </Modal>
  )
}

export default LoginModal
