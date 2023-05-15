import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Kaos, Kemeja } from '../../../assets'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'

const CardHistory = () => {
  return (
    <View style={styles.cardHistory}>
      <Text style={styles.textBold}>Jumat, 27 November 2020</Text>
      <View style={styles.flexContainer}>
        <Text style={styles.textBold}>1.</Text>
        <View style={styles.wrapperAvatar}>
          <Image
            style={styles.avatarImage}
            source={Kaos}
          />
        </View>
        <View>
          <Text style={[styles.textBold, styles.marginBottom]}>Kaos Branded</Text>
          <Text style={styles.marginBottom}>Harga: Rp. 50.000</Text>
          <Text>Quantity: 1</Text>
          <Text>Total: Rp. 50.000</Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.textBold}>2.</Text>
        <View style={styles.wrapperAvatar}>
          <Image
            style={styles.avatarImage}
            source={Kemeja}
          />
        </View>
        <View>
          <Text style={[styles.textBold, styles.marginBottom]}>Kemeja Viral</Text>
          <Text style={styles.marginBottom}>Harga: Rp. 70.000</Text>
          <Text>Quantity: 1</Text>
          <Text>Total: Rp. 70.000</Text>
        </View>
      </View>
      <View style={styles.wrapperInfo}>
        <Text style={styles.textBlue}>Status : LUNAS</Text>
        <Text style={styles.textBlue}>Ongkir : Rp.15.000</Text>
        <Text style={styles.textBlue}>Total : Rp.120.000</Text>
      </View>
    </View>
  )
}

export default CardHistory

const styles = StyleSheet.create({
  cardHistory: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(30),
    paddingHorizontal: responsiveWidht(10),
    paddingVertical: responsiveHeight(20),
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 7,
    borderColor: colors.thirty
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: responsiveHeight(20),
  },
  wrapperInfo: {
    marginTop: responsiveHeight(10),
  },
  textBlue: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.primary,
    textAlign: 'right',
  },
  wrapperAvatar: {
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 5,
    height: responsiveHeight(105),
    width: responsiveWidht(105),
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: responsiveWidht(10),
  },
  avatarImage: {
    height: responsiveHeight(105),
    width: responsiveWidht(105),
    resizeMode: 'cover',
  },
  textBold: {
    fontWeight: '600',
    fontSize: 17
  },
  marginBottom: {
    marginBottom: responsiveHeight(5),
  }
})