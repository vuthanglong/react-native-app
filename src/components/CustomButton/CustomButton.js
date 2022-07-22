import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    lineHeight: 40,
    height: 40,
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    color: '#fff',
  },
})
export default CustomButton
