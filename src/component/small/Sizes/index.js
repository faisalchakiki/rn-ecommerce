import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight } from '../../../utils/utils';
import { colors } from '../../../utils/colors';

const Sizes = () => {
  const [selectedSize, setSize] = useState('')
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  return (
    <View style={styles.containerSize}>
      <Text style={styles.titleSection}>Select Size</Text>
      <View style={styles.containSize}>
        {sizes?.map((size, index) => (
          <Pressable key={index} onPress={() => setSize(size)} style={selectedSize === size ? styles.wrapperSizeSelected : styles.wrapperSize}>
            <Text style={selectedSize === size ? styles.textSizeSelected : styles.textSize}>
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default Sizes

const styles = StyleSheet.create({
  containSize: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleSection: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: responsiveHeight(10),
  },
  containerSize: {
    marginBottom: responsiveHeight(20),
  },
  wrapperSize: {
    // width: responsiveWidht(100),
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.thirty,
    borderRadius: 10,
  },
  wrapperSizeSelected: {
    // width: responsiveWidht(100),
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  textSize: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  textSizeSelected: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
})