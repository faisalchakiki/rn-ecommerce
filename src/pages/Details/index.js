import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { colors } from '../../utils/colors'
import { ArrowBack, BrokenHeart, CartWhite, Heart, Sepatu2 } from '../../assets'
import { ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import { Pressable } from 'react-native'
import StarRating from 'react-native-star-rating'
import { ColorsSection, Quantity, Sizes } from '../../component'

const Details = ({ navigation, route }) => {
  const swiperProductImage = {
    // autoplay: true,
    showsPagination: true,
    // autoplayTimeout: 3.5,
    loadMinimalSize: 3,
    loop: false
  };

  const product = route.params.product;
  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
      >
        <View style={styles.headerBackground} >
          <Pressable onPress={() => navigation.goBack()} style={styles.wrapperArrowBack}>
            <ArrowBack />
          </Pressable>
          <Swiper {...swiperProductImage}>
            {product?.images?.map((image, index) => {
              return (
                <Image
                  key={index + 404}
                  style={styles.productImage}
                  source={{ uri: image }}
                />
              )
            })}
          </Swiper>
        </View>
        <View style={styles.containerDetailsProduct}>
          <View style={styles.flexContainer}>
            <Text style={styles.productPrice}>$ {product.price}</Text>
            <BrokenHeart />
          </View>
          <Text style={styles.productTitle}>{product.title}</Text>
          <View style={styles.containerRating}>
            <View style={styles.containerStar}>
              <StarRating
                // starStyle={{ backgroundColor: 'white' }}
                fullStarColor={colors.primary}
                emptyStarColor={colors.secondary}
                starSize={15}
                disabled={true}
                maxStars={5}
                rating={product.rating}
              />
            </View>
            <Text style={styles.ratingSold}>{product.rating} | 500 sold</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.descriptionProduct}>{product.description}</Text>
          <Sizes />
          <ColorsSection />
          <Quantity stock={product.stock} />
        </View>
      </ScrollView>
      <Pressable>
        <View style={styles.wrapperButton}>
          <CartWhite />
          <Text style={styles.textButton}>Add to Cart</Text>
        </View>
      </Pressable>
    </View >
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    // fontFamily: 'Inter-Regular',
    position: 'relative',
    flex: 1,
    backgroundColor: colors.white,
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBackground: {
    // flex: 1,
    position: 'relative',
    height: responsiveHeight(350),
    borderBottomWidth: 2,
    borderColor: colors.thirty,
  },
  productImage: {
    height: responsiveHeight(350),
    width: responsiveWidht(390),
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
    zIndex: 0,
  },
  wrapperArrowBack: {
    padding: 5,
    backgroundColor: colors.thirty,
    position: 'absolute',
    top: responsiveHeight(35),
    left: responsiveWidht(30),
    zIndex: 10,
    borderRadius: 10,
  },
  containerDetailsProduct: {
    paddingHorizontal: responsiveWidht(20),
    paddingTop: responsiveHeight(20),
    marginBottom: responsiveHeight(85),
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: responsiveHeight(10),
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: responsiveHeight(10),
    color: 'black',
  },
  descriptionProduct: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: responsiveHeight(20),
    color: 'black',
  },
  ratingSold: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.secondary,
    marginLeft: 10,
  },
  line: {
    backgroundColor: colors.thirty,
    height: responsiveHeight(3),
    marginVertical: responsiveHeight(30),
  },
  containerRating: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerStar: {
    width: responsiveWidht(100),
  },
  titleSection: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: responsiveHeight(10),
  },
  wrapperButton: {
    // flex:1,
    flexDirection: 'row',
    marginHorizontal: responsiveWidht(20),
    paddingVertical: responsiveHeight(12),
    // marginBottom: responsiveHeight(75),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    // backgroundColor: colors.secondary,
    borderRadius: 10,
    position: 'absolute',
    // flex: 0.1,
    left: 0,
    right: 0,
    bottom: 10,
  },
  textButton: {
    fontSize: 16,
    marginLeft: 5,
    color: colors.white,
  }
})