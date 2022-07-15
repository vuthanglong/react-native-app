import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import SignInScreen from './src/screens/SignInScreen'
import AppLoading from 'expo-app-loading'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Roboto_400Regular,
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <SignInScreen />
      <StatusBar style='auto' />
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
