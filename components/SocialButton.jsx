import { Text, Pressable, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'

const SocialButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  social,
}) => {
  return (
    <Pressable
      onPress={handlePress}
      active
      className={`bg-white border rounded-lg min-h-[50px] justify-center items-center flex-row ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Image
        source={images[social]}
        className="w-5 h-5 mr-4"
        resizeMode="contain"
      />
      <Text className={`text-sm font-bregular ${textStyles}`}>{title}</Text>
    </Pressable>
  )
}

export default SocialButton
