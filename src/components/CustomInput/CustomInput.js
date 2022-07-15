import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        selectionColor='white'
        activeUnderlineColor='#129f95'
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
})
export default CustomInput
