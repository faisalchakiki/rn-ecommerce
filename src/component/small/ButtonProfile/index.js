import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRight, EditPassword, EditUser, History, Logout } from '../../../assets'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'
import { Pressable } from 'react-native'

const ButtonProfile = ({ icon, navigation, navigateName }) => {
  const Icon = () => {
    if (icon === 'profileEdit') {
      return <EditUser />
    }
    if (icon === 'passwordEdit') {
      return <EditPassword />
    }
    if (icon === 'history') {
      return <History />
    }
    if (icon === 'logout') {
      return <Logout />
    }
    return <EditUser />
  }

  const TextButton = () => {
    if (icon === 'profileEdit') {
      return <Text style={styles.textButton}>Edit Profile</Text>
    }
    if (icon === 'passwordEdit') {
      return <Text style={styles.textButton}>Edit Password</Text>
    }
    if (icon === 'history') {
      return <Text style={styles.textButton}>History Order</Text>
    }
    if (icon === 'logout') {
      return <Text style={styles.textButton}>Sign Out</Text>
    }
    return <Text style={styles.textButton}>Edit Profile</Text>
  }

  return (
    <Pressable onPress={() => navigation.navigate(`${navigateName}`)} >
      <View style={styles.container}>
        <Icon />
        <TextButton />
        <ArrowRight />
      </View>
    </Pressable>
  )
}

export default ButtonProfile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidht(20),
    paddingVertical: responsiveHeight(18),
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: colors.white,
    elevation: 7,
    marginBottom: responsiveHeight(20),
  },
  textButton: {
    flex: 1,
    paddingHorizontal: responsiveWidht(10),
    // borderWidth: 1,
    fontSize: 17,
    fontWeight: '600',
  }
})