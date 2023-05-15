import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'
import { BrokenHeart, Heart } from '../../../assets'

const CardWishlist = ({ product, navigation }) => {
  return (
    <View style={styles.cardProduct}>
      <Image
        style={styles.imageProduct}
        source={{ uri: product.images[0] }}
      />
      <Text style={styles.titleProduct}>{product.title}</Text>
      {/* <Text style={styles.hargaProduct}>Rp.100.000</Text> */}
      <Text style={styles.hargaProduct}>$ {product.price}</Text>
      <View style={styles.wrapperWish}>
        <Heart />
        {/* <BrokenHeart /> */}
        <Text style={styles.ratingProduct}>{product.rating}/5</Text>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Details',{product}) }>
        <View style={styles.btnDetails}>
          <Text style={styles.detailsText}>Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CardWishlist

const styles = StyleSheet.create({
  cardProduct: {
    // borderWidth: 1,
    width: responsiveWidht(160),
    backgroundColor: colors.thirty,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(30),
    marginHorizontal: responsiveHeight(10),
    flex: 1,
  },

  imageProduct: {
    // width: responsiveWidht(160),
    height: responsiveHeight(150),
    resizeMode: 'cover',
  },

  titleProduct: {
    fontSize: 14,
    fontWeight: '400',
    color: "black",
    marginBottom: responsiveHeight(1),
    textAlign: 'center',
    paddingHorizontal: responsiveWidht(5),
    textTransform: 'capitalize'
  },

  hargaProduct: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
    marginBottom: responsiveHeight(5),
    textAlign: 'center',
    paddingHorizontal: responsiveWidht(5),
  },

  ratingProduct: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
    textAlign: 'center',
  },

  wrapperWish: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidht(15),
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
})