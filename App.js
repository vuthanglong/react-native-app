import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import Navigation from './src/navigation'

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
      <Navigation />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
})
