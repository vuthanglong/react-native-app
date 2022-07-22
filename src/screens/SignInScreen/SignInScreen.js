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
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { height, width } = useWindowDimensions()
  const navigation = useNavigation()
  const onSignInPressed = (data) => {
    console.log(data)
    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView behavior='position'>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={[styles.root, { height: height, width: width, maxWidth: 520 }]}
        >
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
            colors={['#2197ef', '#4aae56']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
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
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    width: '100%',
    borderRadius: '40px',
    maxWidth: 400,
  },
})
export default SignInScreen
