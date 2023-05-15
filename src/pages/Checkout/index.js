import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { ArrowBack, ArrowSubmit } from '../../assets'
import { Picker } from '@react-native-picker/picker';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import { HeaderBack } from '../../component/small'

const Checkout = ({ navigation }) => {
  const [selectedEkspedisi, setEkspedisi] = React.useState('')
  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
      >
        <View style={styles.containerCart}>
          <HeaderBack navigation={navigation} text='Checkout' />
          <View>
            <Text style={styles.boldSection}>This Address Correct?</Text>
            <View style={styles.wrapperAddress}>
              <Text style={styles.titleAdress}>My Address:</Text>
              <Text style={styles.adress}>Jl Gajah Mada X/22 Simpangan</Text>
              <Text style={styles.adress}>Kota/ Kab. Semarang</Text>
              <Text style={styles.adress}>Provinsi. Jawa Tengah</Text>
              <Text style={styles.addressEdit}>Change Address</Text>
            </View>
            <View style={[styles.wrapperSpaceBetween, {
              marginVertical: responsiveHeight(25),
            }]}>
              <Text style={styles.boldSection}>Total Harga :</Text>
              <Text style={styles.boldSection}>Rp. 400.000</Text>
            </View>
            <View>
              <Text style={styles.textSection}>Choose Ekspedisi :</Text>
              <View style={styles.wrapperPicker}>
                <Picker
                  selectedValue={selectedEkspedisi}
                  onValueChange={(itemValue, itemIndex) =>
                    setEkspedisi(itemValue)
                  }>
                  <Picker.Item label="-- Choose --" value="" enabled={false} />
                  <Picker.Item label="JNT" value="JNT" />
                  <Picker.Item label="JNE (Gratis Ongkir)" value="JNE" />
                  <Picker.Item label="SiCepat" value="SiCepat" />
                </Picker>
              </View>
            </View>
            <Text style={styles.boldSection}>Biaya Ongkir:</Text>
            <View style={styles.wrapperSpaceBetween}>
              <Text style={styles.textSection}>Untuk Berat : 0.50 kg</Text>
              <Text style={styles.boldSection}>Rp. 20.000</Text>
            </View>
            <View style={styles.wrapperSpaceBetween}>
              <Text style={styles.textSection}>Estimasi Waktu</Text>
              <Text style={styles.boldSection}>2-3 Hari</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapperFooter}>
        <View style={styles.wrapperTotal}>
          <Text style={styles.totalText}>Total Harga :</Text>
          <Text style={styles.totalText}>Rp. 420.000</Text>
        </View>
        <Pressable>
          <View style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Bayar</Text>
          </View>
        </Pressable>
      </View>
    </View >
  )
}

export default Checkout

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
  boldSection: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  textSection: {
    fontSize: 17,
    color: 'black',
  },
  wrapperSpaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: responsiveHeight(15),
  },
  wrapperPicker: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.thirty,
    marginBottom: responsiveHeight(25),
    marginTop: responsiveHeight(10),
  },
  titleAdress: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginBottom: responsiveHeight(8),
  },
  addressEdit: {
    fontSize: 14,
    fontWeight: '500',
    color: 'blue',
    marginTop: responsiveHeight(8),
    textAlign: 'right'
  },
  wrapperAddress: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidht(15),
    paddingVertical: responsiveWidht(8),
    borderRadius: 5,
    marginVertical: responsiveHeight(10),

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