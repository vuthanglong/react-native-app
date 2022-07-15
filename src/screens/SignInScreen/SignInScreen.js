import React from 'react'
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'
import AppName from '../../components/AppName'
import Logo from '../../../assets/logo.png'
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter'
import { LinearGradient } from 'expo-linear-gradient'

const SignInScreen = () => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  })
  const { height } = useWindowDimensions()
  return (
    <View style={[styles.root, { height: height }]}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <View style={{ marginTop: 20 }}>
        <AppName fontSize={30} />
      </View>
      <View style={styles.form}></View>
      <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      <LinearGradient
        // Button Linear Gradient
        colors={['rgba(29, 255, 228, 0.5) 2.77%', 'rgba(148, 236, 117, 0.5)']}
        style={styles.login}
      >
        <Button title="Đăng nhập" color="transparent" />
        {/* <Text style={styles.text}>Sign in with Facebook</Text> */}
      </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '70%',
    maxWidth: 254,
    maxHeight: 254,
  },
  form: {
    height: 135,
    width: '100%',
    maxWidth: 400,
    borderWidth: 5,
  },
  forgotPassword: {
    color: '#129f95',
    alignSelf: 'flex-end',
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
  },
  login: {
    flex: 1,
    width: '100%',
    maxHeight: 50,
    borderRadius: '25px',
    justifyContent: 'center',
    maxWidth: 400,
  },
})
export default SignInScreen
