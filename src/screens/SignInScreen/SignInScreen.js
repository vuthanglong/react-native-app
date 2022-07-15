import React from 'react'
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import AppName from '../../components/AppName'
import Logo from '../../../assets/logo.png'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const { height } = useWindowDimensions()
  const onSignInPressed = () => {
    console.warn('Sign in')
  }

  return (
    <KeyboardAvoidingView behavior='position'>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={[styles.root, { height: height }]}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode='contain'
          />
          <View style={{ marginTop: 20 }}>
            <AppName fontSize={30} />
          </View>
          <View style={{ marginTop: 20, paddingVertical: 10, width: '100%' }}>
            <CustomInput
              placeholder='Email'
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder='Password'
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
            <Text style={[styles.forgotPassword, { marginTop: 20 }]}>
              Quên mật khẩu?
            </Text>
          </View>
          <LinearGradient
            // Button Linear Gradient
            colors={[
              'rgba(29, 255, 228, 0.5) 2.77%',
              'rgba(148, 236, 117, 0.5)',
            ]}
            style={styles.login}
          >
            <CustomButton onPress={onSignInPressed} text='Đăng nhập' />
          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    // justifyContent: 'space-between',
  },
  logo: {
    width: '70%',
    maxWidth: 254,
    maxHeight: 254,
  },
  forgotPassword: {
    color: '#129f95',
    alignSelf: 'flex-end',
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
  },
  login: {
    marginTop: 60,
    flex: 1,
    width: '100%',
    maxHeight: 50,
    borderRadius: '25px',
    justifyContent: 'center',
    maxWidth: 400,
  },
})
export default SignInScreen
