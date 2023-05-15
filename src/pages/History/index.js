import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardHistory, HeaderBack } from '../../component'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'

const History = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.containerMain}>
        <HeaderBack navigation={navigation} text='History' />
        <CardHistory />
      </View>
    </ScrollView>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    // fontFamily: 'Inter-Regular',
    position: 'relative',
    flex: 1,
    backgroundColor: colors.white,
  },
  containerMain: {
    paddingHorizontal: responsiveWidht(20),
    paddingTop: responsiveHeight(35),
    // marginBottom: responsiveHeight(125),
  },
})