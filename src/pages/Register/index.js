import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { ArrowSubmit, Ilustration, RegisterImage } from '../../assets'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { InputText } from '../../component'

const Register = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.containerMain}>
        <View style={styles.center}>
          <RegisterImage />
        </View>
        <View style={styles.center}>
          <Text style={styles.textPrimary}>Daftar</Text>
          <Text style={styles.textPrimary}>Isi Data Diri Anda</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.flex}>
            <View style={styles.circleMain} />
            <View style={styles.circle} />
          </View>
        </View>
        <View style={styles.boxAuth}>
          <InputText title='Nama' />
          <InputText title='Email' />
          <InputText title='No Handphone' keyboard='number' />
          <InputText title='Password' type='password' />
          <Pressable onPress={()=> navigation.navigate('Register2')} style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  containerMain: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidht(20),
    justifyContent: 'center',
    borderWidth: 1,
    paddingTop: responsiveHeight(50),
    paddingBottom: responsiveHeight(20)
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(15)
  },
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(10),
    flexDirection: 'row',
  },
  circle: {
    width: responsiveWidht(15),
    height: responsiveHeight(18),
    backgroundColor: colors.white,
    marginHorizontal: responsiveHeight(5),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  circleMain: {
    width: responsiveWidht(15),
    height: responsiveHeight(18),
    backgroundColor: colors.primary,
    marginHorizontal: responsiveHeight(5),
    borderRadius: 10,
    borderWidht: 2,
    borderColor: colors.primary,
  },
  ilustrationSignIn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
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
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 17,
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