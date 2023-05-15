import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'
import { CategoriesAll, CategoriesElectronik, CategoriesFashion, CategoriesSchool, CategoriesSport } from '../../../assets'
import { TouchableOpacity } from 'react-native'

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>Categories</Text>
      <View style={styles.wrapperCategories}>
        <TouchableOpacity>
          <View style={styles.wrapperCategory}>
            <CategoriesFashion />
            <Text style={styles.textCategoty}>Apparel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapperCategory}>
            <CategoriesSchool />
            <Text style={styles.textCategoty}>School</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapperCategory}>
            <CategoriesElectronik />
            <Text style={styles.textCategoty}>Electronic</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapperCategory}>
            <CategoriesSport />
            <Text style={styles.textCategoty}>Sport</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapperCategory}>
            <CategoriesAll />
            <Text style={styles.textCategoty}>All</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidht(15),
    paddingTop: responsiveHeight(10),
    marginBottom: responsiveHeight(5),
  },
  titleSection: {
    fontSize: 16,
    paddingHorizontal: responsiveWidht(10),
    fontWeight: '500',
    color: "black",
    marginBottom: responsiveHeight(15),
  },

  wrapperCategories: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  wrapperCategory: {
    // borderWidth: 1,
    width: responsiveWidht(65),
    alignItems: 'center',
    justifyContent: 'center',
  },

  textCategoty: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.secondary,
  },
})