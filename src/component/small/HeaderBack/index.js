import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowBack } from '../../../assets'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'

const HeaderBack = ({ navigation, text }) => {
  return (
    <View style={styles.containerHeader}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowBack />
      </Pressable>
      <Text style={styles.titleSection}>{text}</Text>
    </View>
  )
}

export default HeaderBack

const styles = StyleSheet.create({
  containerHeader: {
    paddingTop: 5,
    // backgroundColor: colors.thirty,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(30),

  },
  titleSection: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginLeft: responsiveWidht(25),
    // borderWidth:1
  },
})