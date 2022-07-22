import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { List } from 'react-native-paper'

const ControlScreen = () => {
  return (
    <List.Section>
      <List.Item
        title='First Item'
        description='Item description'
        // left={(props) => <List.Icon {...props} icon='folder'
        // />}
      />
    </List.Section>
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
export default ControlScreen
