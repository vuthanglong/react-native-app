import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'

const AppName = (props) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  })
  return (
    <Text style={[styles.name, { fontSize: props.fontSize }]}>
      <Text style={styles.rallip}>RALLIP</Text>{' '}
      <Text style={styles.smart}>SMART</Text>
    </Text>
  )
}
const styles = StyleSheet.create({
  name: {
    fontFamily: 'Inter_700Bold',
  },
  rallip: {
    color: '#129f95',
  },
  smart: {
    color: '#07c754',
  },
})
export default AppName
