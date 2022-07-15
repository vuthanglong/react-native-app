import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
})
export default CustomButton
