import { StyleSheet } from 'react-native'
import React from 'react'
import { Banner, Categories, HeaderComponent, RecentProduct } from '../../component/big'
import { colors } from '../../utils/colors'
import { ScrollView } from 'react-native'
import { responsiveHeight } from '../../utils/utils'
import { SafeAreaView } from 'react-native'
// import { useFonts } from 'expo-font'
// import AppLoading from 'expo-app-loading'

const Home = ({ navigation }) => {
  // let fontsLoaded = useFonts({
  //   "Inter-Regular" : require('../../utils/fonts/Inter-Regular.ttf')
  // })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderComponent navigation={navigation} />
        <Banner />
        <Categories />
        <RecentProduct navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    // fontFamily: 'Inter-Regular',
    marginBottom: responsiveHeight(75),
    position: 'relative',
    flex: 1,
    backgroundColor: colors.white
  },
})