import { Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <Pressable
      onPress={handlePress}
      active
      className={`bg-secondary rounded-lg min-h-[50px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      <Text className={`text-white text-base font-bmedium ${textStyles}`}>
        {title}
      </Text>
    </Pressable>
  )
}

export default CustomButton
