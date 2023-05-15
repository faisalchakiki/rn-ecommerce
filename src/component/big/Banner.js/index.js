import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'
import { Banner1, Banner2, Banner3 } from '../../../assets'
import Swiper from 'react-native-swiper'



const Banner = () => {
  const swiperBanner = {
    autoplay: true,
    showsPagination: true,
    autoplayTimeout: 3.5,
    loadMinimalSize: 3,
  };

  return (
    <View style={styles.container}>
      <Swiper {...swiperBanner}>
        <View style={styles.wrapperBanner}>
          <Image
            style={styles.imageBanner}
            source={Banner1}
          />
        </View>
        <View style={styles.wrapperBanner}>
          <Image
            style={styles.imageBanner}
            source={Banner2}
          />
        </View>
        <View style={styles.wrapperBanner}>
          <Image
            style={styles.imageBanner}
            source={Banner3}
          />
        </View>
      </Swiper>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(200),
    backgroundColor: colors.white,
    // paddingTop: responsiveHeight(10),
    // paddingHorizontal: responsiveWidht(20),
    overflow: 'hidden',
    // borderWidth: 1,
  },
  wrapperBanner: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: responsiveWidht(390),
    height: responsiveHeight(200),
    overflow: 'hidden',
  },
  imageBanner: { width: responsiveWidht(390), height: responsiveHeight(200), resizeMode: 'cover', },
})