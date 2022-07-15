import React from 'react'
import {
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
import { useForm } from 'react-hook-form'

const SignInScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { height } = useWindowDimensions()
  const onSignInPressed = (data) => {
    console.warn(data)
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
              name='email'
              control={control}
              placeholder='Email'
              rules={{ required: 'Email is required' }}
            />
            <CustomInput
              name='password'
              control={control}
              placeholder='Password'
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
            <CustomButton
              onPress={handleSubmit(onSignInPressed)}
              text='Đăng nhập'
            />
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
