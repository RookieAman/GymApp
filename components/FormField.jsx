import { View, Text, TextInput, Animated } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [isFocused, value])

  const labelStyle = {
    position: 'absolute',
    left: 16,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: '#A3A3A3',
  }

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className="w-full h-16 px-4 bg-[#f2f2f2] rounded-xl">
        <Animated.Text style={labelStyle} className="font-bmedium">
          {title}
        </Animated.Text>
        <TextInput
          className="flex-1 text-lg"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#A3A3A3'}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  )
}

export default FormField
