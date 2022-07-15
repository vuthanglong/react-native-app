import React from 'react'
import { Text, StyleSheet } from 'react-native'

const AppName = ({ fontSize }) => {
  return (
    <Text style={[styles.name, { fontSize: fontSize }]}>
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
