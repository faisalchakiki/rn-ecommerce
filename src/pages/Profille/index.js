import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { colors } from '../../utils/colors'
import { Kaos } from '../../assets'
import { ButtonProfile } from '../../component/small'
import { ScrollView } from 'react-native'

const Profile = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.headerBackground} />
      <View style={styles.wrapperProfile} >
        <View style={styles.containerSectionProfile}>
          <View style={styles.wrapperAvatar}>
            <Image
              style={styles.avatarImage}
              source={Kaos}
            />
          </View>
        </View>
        <View style={[styles.containerSectionProfile, {
          marginBottom: responsiveHeight(30)
        }]}>
          <Text style={styles.nameProfile}>Faisal Chakiki</Text>
          <Text style={styles.descriptionProfile}>No. HP : 0857423482732</Text>
          <Text style={styles.descriptionProfile}>Jl. Menoreh Tengah X/22 Sampangan Semarang</Text>
        </View>
        <ButtonProfile icon='profileEdit' navigation={navigation} navigateName={'EditProfile'}/>
        <ButtonProfile icon='passwordEdit' navigation={navigation} navigateName={'EditPassword'}/>
        <ButtonProfile icon='history' navigation={navigation} navigateName={'History'}/>
        <ButtonProfile icon='logout' navigation={navigation} navigateName={'SignIn'} />
      </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    // fontFamily: 'Inter-Regular',
    marginBottom: responsiveHeight(75),
    position: 'relative',
    flex: 1,
    backgroundColor: colors.white
  },
  headerBackground: {
    // flex: 1,
    backgroundColor: colors.primary,
    height: responsiveHeight(210),
  },
  wrapperProfile: {
    flex: 1,
    paddingHorizontal: responsiveWidht(20),
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: responsiveHeight(-20),
    // height: responsiveHeight(250),
  },
  wrapperAvatar: {
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 25,
    marginTop: responsiveHeight(-80),
    height: responsiveHeight(165),
    width: responsiveWidht(155),
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  containerSectionProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(10),
  },
  avatarImage: {
    height: responsiveHeight(165),
    width: responsiveWidht(155),
    resizeMode: 'cover',
  },
  nameProfile: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: responsiveHeight(10),
    textAlign: 'center'
  },
  descriptionProfile: {
    // borderWidth: 1,
    fontSize: 16,
    textAlign: 'center'
  },
})