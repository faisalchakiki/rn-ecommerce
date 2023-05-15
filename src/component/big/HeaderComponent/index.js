import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { colors } from '../../../utils/colors'
import { Search } from '../../../assets/images'
import { ButtonIcon } from '../../small'

const HeaderComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Search style={styles.imageSearch} />
        <TextInput style={styles.inputSearch} placeholder='Search Here...' />
      </View>
      <ButtonIcon icon='cart' totalCart={5} navigation={navigation} />
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(120),
    paddingHorizontal: responsiveWidht(20),
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(10),
  },

  containerInput: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1, borderStyle: 'solid',
    borderColor: colors.thirty,
    width: responsiveWidht(280),
    paddingVertical: responsiveHeight(8),
    borderRadius: 10,
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal: responsiveWidht(10)
  },

  inputSearch: {
    width: responsiveWidht(190),
    backgroundColor: colors.transparent,
    color: colors.secondary,
  },

})