import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'

const ColorsSection = () => {
  const [selectedColor, setColor] = useState('')

  const colorSelection = [{
    name: 'Blue',
    color: '#58C5FF'
  }, {
    name: 'Black',
    color: '#000000'
  }, {
    name: 'Red',
    color: '#FF0606'
  },
  {
    name: 'Green',
    color: '#3C9F0E'
  },
  {
    name: 'Orange',
    color: '#E17C1E'
  },
  {
    name: 'Silver',
    color: '#E5E5E5'
  },
  ]
  return (
    <View style={styles.containerColor}>
      <Text style={styles.titleSection}>Select Color</Text>
      <View style={styles.containColor}>
        {colorSelection?.map((item, index) => {
          const selected = [styles.wrapperColorSelected, { backgroundColor: item.color }];
          const styleWrapper = [styles.wrapperColor, { backgroundColor: item.color, borderColor: item.color }];
          return (
            <Pressable onPress={() => setColor(item.name)} key={index} style={item.name === selectedColor ? selected : styleWrapper}>
              <Text style={styles.textColor}>{item.name}</Text>
            </Pressable>
          )
        })}
      </View>
    </View>
  )
}

export default ColorsSection

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginBottom: responsiveHeight(10),
  },
  containerColor: {
    marginBottom: responsiveHeight(20),
  },
  containColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  wrapperColor: {
    // width: responsiveWidht(100),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 3,
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  wrapperColorSelected: {
    // width: responsiveWidht(100),
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 3,
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    opacity: 0.7,
  },
  textColor: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
    width: responsiveWidht(75),
  },
})