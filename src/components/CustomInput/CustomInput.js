import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { Controller } from 'react-hook-form'

const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry = false,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View style={styles.container}>
            <TextInput
              value={value}
              placeholder={placeholder}
              onChangeText={onChange}
              onBlur={onBlur}
              selectionColor='white'
              activeUnderlineColor={error ? 'red' : '#129f95'}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            />
          </View>
          {/* {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )} */}
        </>
      )}
    />
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
