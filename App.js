import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import SignInScreen from './src/screens/SignInScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
})
