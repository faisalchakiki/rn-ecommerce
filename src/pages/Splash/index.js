import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Logo, Ilustration } from '../../assets'
import { colors } from '../../utils/colors'
export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate('MainApp')
  }, 5000)
  return (
    <View style={styles.center}>
      <Logo />
      {/* <View style={styles.ilustrationSplash}>
        <Image
          source={Ilustration}
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  // ilustrationSplash: {
  //   position: 'absolute',
  //   bottom: 0,
  // },
})