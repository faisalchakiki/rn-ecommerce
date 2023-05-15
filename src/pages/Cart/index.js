import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { ArrowSubmit } from '../../assets'
import { CardCart, HeaderBack } from '../../component'

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
      >
        <View style={styles.containerCart}>
        <HeaderBack navigation={navigation} text='Cart' />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
        </View>
      </ScrollView>
      <View style={styles.wrapperFooter}>
        <View style={styles.wrapperTotal}>
          <Text style={styles.totalText}>Total Harga :</Text>
          <Text style={styles.totalText}>Rp. 400.000</Text>
        </View>
        <Pressable onPress={()=> navigation.navigate('Checkout')}>
          <View style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Check Out</Text>
          </View>
        </Pressable>
      </View>
    </View >
  )
}

export default Cart

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
  productImage: {
    height: responsiveHeight(350),
    width: responsiveWidht(390),
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
    zIndex: 0,
  },
  containerCart: {
    paddingHorizontal: responsiveWidht(20),
    paddingTop: responsiveHeight(35),
    marginBottom: responsiveHeight(125),
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
    borderColor: colors.thirty,
    borderTopWidth: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapperTotal: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: responsiveWidht(20),
    backgroundColor: colors.white,
    marginVertical: responsiveHeight(10),
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
  },
})