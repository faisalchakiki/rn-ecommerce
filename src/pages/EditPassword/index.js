import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HeaderBack, InputText } from '../../component'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { ArrowSubmit } from '../../assets'

const EditPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <HeaderBack navigation={navigation} text='Change Password' />
        <InputText title='Current Password' type='password' />
        <InputText title='New Password' type='password' />
        <InputText title='Confirm New Password' type='password' />
        
      </View>
      <View style={styles.wrapperFooter}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default EditPassword

const styles = StyleSheet.create({
  container: {
    // fontFamily: 'Inter-Regular',
    position: 'relative',
    flex: 1,
    backgroundColor: colors.white,
  },
  containerMain: {
    paddingHorizontal: responsiveWidht(20),
    paddingTop: responsiveHeight(35),
    // marginBottom: responsiveHeight(125),
  },
  wrapperButton: {
    // flex:1,
    flexDirection: 'row',
    marginBottom: responsiveWidht(20),
    paddingVertical: responsiveHeight(12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginHorizontal: responsiveWidht(20),
  },
  textButton: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.white,
  },
  wrapperFooter: {
    // flex:1,
    paddingTop: responsiveHeight(15),
    backgroundColor: colors.white,
    // borderColor: colors.thirty,
    // borderTopWidth: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
 
})