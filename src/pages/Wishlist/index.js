import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { Ilustration, Search } from '../../assets'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { WishlistProduct } from '../../component'

const Wishlist = ({navigation}) => {
  return (
    // <View style={styles.containerCenter}>
    //   <Search />
    //   <Text style={styles.textNotWish}>wishlist not yet added</Text>
    // </View>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.wrapperHeading}>
          <View style={styles.containerInput}>
            <Search style={styles.imageSearch} />
            <TextInput style={styles.inputSearch} placeholder='Search Your Wishlist...' />
          </View>
        </View>
        <WishlistProduct navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(75),
  },

  textNotWish: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: colors.secondary
  },

  containerInput: {
    flexDirection: 'row',
    flex: 1,
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
    flex: 1,
    backgroundColor: colors.transparent,
    color: colors.secondary,
  },

  wrapperHeading: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(120),
    paddingHorizontal: responsiveWidht(20),
    backgroundColor: colors.white,
    paddingTop: responsiveHeight(10),
  }
})