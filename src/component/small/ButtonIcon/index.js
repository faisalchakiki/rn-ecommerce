import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Pressable } from 'react-native'
import { colors } from '../../../utils/colors';
import { responsiveHeight, responsiveWidht } from '../../../utils/utils';
import { Cart } from '../../../assets';

const ButtonIcon = ({ totalCart, icon, navigation }) => {
  const [isPress, setIsPress] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: colors.primary,                           
    style: isPress ? styles.btnPress : styles.btnNormal, 
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => navigation.navigate('Cart'),             
  };

  const Icon = () => {
    if (icon === 'cart') {
      return (
        <View>
          <Cart />
          {totalCart && (<View style={styles.wrapperTotalCart}>
            <Text style={styles.totalCart}>{totalCart}</Text>
          </View>)}
        </View>
      )
    }
  }

  return (
    <TouchableHighlight {...touchProps}>
      <Icon />
    </TouchableHighlight>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  btnNormal: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.thirty,
    width: responsiveWidht(50),
    paddingVertical: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },

  btnPress: {
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    width: responsiveWidht(50),
    paddingVertical: responsiveHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },

  wrapperTotalCart: {
    position: 'absolute',
    top: responsiveHeight(-5),
    right: responsiveWidht(-8),
    borderRadius: 10,
    paddingHorizontal: responsiveWidht(5),
    backgroundColor: colors.primary,
  },

  totalCart: {
    fontWeight: '800',
    color: colors.white,
  },
})