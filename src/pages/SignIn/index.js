import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { Logo, Ilustration } from '../../assets'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { InputText } from '../../component'
export default function SignIn({ navigation }) {
  // setTimeout(()=>{
  //   navigation.navigate('Home') 
  // }, 5000)
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Logo />
      </View>
      <View style={styles.boxAuth}>
        <InputText title='Email' />
        <InputText title='Password' type='password' />
        <Pressable style={styles.wrapperButton}>
          <Text style={styles.textButton}>Login</Text>
        </Pressable>
      </View>
      <Pressable onPress={()=> navigation.navigate('Register')} style={styles.center}>
        <Text style={styles.textPrimary}>Belum Punya Akun ? Klik Untuk Daftar</Text>
      </Pressable>
      <View style={styles.ilustrationSignIn}>
        <Image
          style={styles.imageIlustration}
          source={Ilustration}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidht(20),
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(20)
  },
  ilustrationSignIn: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  imageIlustration: {
    width: responsiveWidht(200),
    height: responsiveHeight(200),
    resizeMode: 'contain',
  },
  boxAuth: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(30),
    paddingHorizontal: responsiveWidht(20),
    paddingVertical: responsiveHeight(25),
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 7,
    borderColor: colors.thirty
  },
  wrapperButton: {
    marginTop: responsiveHeight(10),
    paddingVertical: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.white,
  },
  textPrimary: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '600',
    width: responsiveWidht(200),
    textAlign: 'center',
  },
})