import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { DeleteIcon, Kacamata } from '../../../assets'

const CardCart = () => {
  return (
    <View style={styles.cardProduct}>
      <View>
        <Image
          style={styles.imageProduct}
          source={Kacamata}
        />
      </View>
      <View style={styles.wrapperDetail}>
        <Text style={styles.titleProduct}>Kacamata</Text>
        <Text style={styles.detailsProduct}>Harga : Rp.100.000</Text>
        <Text style={styles.detailsProduct}>Quantity : 1</Text>
        <Text style={styles.detailsProduct}>Size : L</Text>
        <Text style={styles.detailsProduct}>Color : Red</Text>
        <Text style={styles.detailsProduct}>Total : Rp.100.000</Text>
        <View style={styles.deleteIcon}>
          <DeleteIcon />
        </View>
      </View>
    </View>
  )
}

export default CardCart

const styles = StyleSheet.create({
  cardProduct: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(30),
    flexDirection: 'row',
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderColor: colors.thirty
  },
  wrapperDetail: {
    paddingLeft: responsiveWidht(15),
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'space-evenly',
    position: 'relative'
  },
  imageProduct: {
    width: responsiveWidht(140),
    height: responsiveHeight(180),
    resizeMode: 'cover',
    flex: 1,
  },

  titleProduct: {
    fontSize: 15,
    fontWeight: '500',
    color: "black",
    marginRight: responsiveWidht(35),
    textTransform: 'capitalize'
  },

  detailsProduct: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: responsiveHeight(5),
  },

  btnDetails: {
    backgroundColor: colors.primary,
  },

  detailsText: {
    paddingVertical: responsiveHeight(10),
    color: colors.white,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  deleteIcon: {
    position: 'absolute',
    right: responsiveWidht(10),
    top: responsiveHeight(10),
  }
})