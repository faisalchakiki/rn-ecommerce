import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native'
import React from 'react'
import { ArrowSubmit, Ilustration, RegisterImage2 } from '../../assets'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { InputText } from '../../component'
import { Picker } from '@react-native-picker/picker'

const Register2 = ({ navigation }) => {
  const [selectedProvinsi, setProvinsi] = React.useState('')
  const [selectedCity, setCity] = React.useState('')
  const [text, onChangeText] = React.useState('');
  const citys = ['Jakarta', 'Tegal', 'Semarang', 'Cirebon', 'Bandung']
  const provinsiSelection = ['Jawa Tengah', 'Jawa Timur', 'Jawa Barat', 'Banten', 'Kalimantan']
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.containerMain}>
        <View style={styles.center}>
          <RegisterImage2 />
        </View>
        <View style={styles.center}>
          <Text style={styles.textPrimary}>Isi Alamat</Text>
          <Text style={styles.textPrimary}>Lengkap Anda</Text>
        </View>
        <View style={styles.center}>
          <View style={styles.flex}>
            <View style={styles.circle} />
            <View style={styles.circleMain} />
          </View>
        </View>
        <View style={styles.boxAuth}>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Alamat :</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              placeholderTextColor={'black'}
              numberOfLines={4}
              onChangeText={onChangeText}
              value={text}
              placeholder='Alamat'
            // keyboardType={keyboard === 'number' ? "numeric" : 'default'}
            />
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Province :</Text>
            <View style={styles.wrapperPicker}>
              <Picker
                selectedValue={selectedProvinsi}
                onValueChange={(itemValue, itemIndex) =>
                  setProvinsi(itemValue)
                }>
                <Picker.Item label="-- Choose --" value="" enabled={false} />
                {provinsiSelection?.map((provinsi,index) => (
                  <Picker.Item key={index} label={provinsi} value={provinsi} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>City/Regency :</Text>
            <View style={styles.wrapperPicker}>
              <Picker
                selectedValue={selectedCity}
                onValueChange={(itemValue, itemIndex) =>
                  setCity(itemValue)
                }>
                <Picker.Item label="-- Choose --" value="" enabled={false} />
                {citys?.map((city,index) => (
                  <Picker.Item key={index} label={city} value={city} />
                ))}
              </Picker>
            </View>
          </View>
          <Pressable onPress={() => navigation.navigate('MainApp')} style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  containerMain: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidht(20),
    justifyContent: 'center',
    borderWidth: 1,
    paddingTop: responsiveHeight(50),
    paddingBottom: responsiveHeight(20)
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(15)
  },
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: responsiveHeight(10),
    flexDirection: 'row',
  },
  circle: {
    width: responsiveWidht(15),
    height: responsiveHeight(18),
    backgroundColor: colors.white,
    marginHorizontal: responsiveHeight(5),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  circleMain: {
    width: responsiveWidht(15),
    height: responsiveHeight(18),
    backgroundColor: colors.primary,
    marginHorizontal: responsiveHeight(5),
    borderRadius: 10,
    borderWidht: 2,
    borderColor: colors.primary,
  },
  ilustrationSignIn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  imageIlustration: {
    width: responsiveWidht(200),
    height: responsiveHeight(200),
    resizeMode: 'contain',
  },
  boxAuth: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: responsiveHeight(30),
    paddingHorizontal: responsiveWidht(20),
    paddingVertical: responsiveHeight(25),
    shadowColor: colors.secondary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 7,
    borderColor: colors.thirty
  },
  wrapperButton: {
    marginTop: responsiveHeight(10),
    paddingVertical: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 17,
    marginLeft: 5,
    color: colors.white,
  },
  textPrimary: {
    fontSize: 18,
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '600',
    width: responsiveWidht(200),
    textAlign: 'center',
  },
  wrapperInput: {
    marginBottom: responsiveHeight(15),
  },
  textInput: {
    fontSize: 15,
    fontWeight: '500',
    // color: colors.white,
  },
  input: {
    marginTop: responsiveHeight(10),
    borderWidth: 2,
    padding: 10,
    borderColor: colors.thirty,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  wrapperPicker: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.thirty,
    marginBottom: responsiveHeight(25),
    marginTop: responsiveHeight(10),
  },
})