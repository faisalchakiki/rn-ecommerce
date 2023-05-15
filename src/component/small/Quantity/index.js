import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumericInput from 'react-native-numeric-input'
import { responsiveHeight } from '../../../utils/utils'

const Quantity = ({stock}) => {
  return (
    <View >
      <Text style={styles.titleSection}>Quantity({stock})</Text>
      <NumericInput
        totalWidth={200}
        totalHeight={50}
        minValue={0}
        maxValue={stock}
        rounded
        onChange={value => console.log(value)} />
    </View>
  )
}

export default Quantity

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: responsiveHeight(10),
  },
})