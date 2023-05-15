import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { HeaderBack, InputText } from '../../component'
import { ArrowSubmit, Kaos } from '../../assets'
import { colors } from '../../utils/colors'
import { responsiveHeight, responsiveWidht } from '../../utils/utils'
import { Picker } from '@react-native-picker/picker'

const EditProfile = ({ navigation }) => {
  const [selectedProvinsi, setProvinsi] = React.useState('')
  const [selectedCity, setCity] = React.useState('')
  const [text, onChangeText] = React.useState('');
  const citys = ['Jakarta', 'Tegal', 'Semarang', 'Cirebon', 'Bandung']
  const provinsiSelection = ['Jawa Tengah', 'Jawa Timur', 'Jawa Barat', 'Banten', 'Kalimantan']
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.containerMain}>
          <HeaderBack navigation={navigation} text='Change Profile' />
          <InputText title='Nama' />
          <InputText title='Email' />
          <InputText title='No Handphone' keyboard='number' />
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>Alamat :</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={4}
              onChangeText={onChangeText}
              placeholderTextColor={'black'}
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
                {provinsiSelection?.map((provinsi, index) => (
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
                {citys?.map((city, index) => (
                  <Picker.Item key={index} label={city} value={city} />
                ))}
              </Picker>
            </View>
          </View>
          <View style={styles.wrapperInput}>
            <Text style={styles.textInput}>foto Profile :</Text>
            <View style={styles.flexContainer}>
              <View style={styles.wrapperAvatar}>
                <Image
                  style={styles.avatarImage}
                  source={Kaos}
                />
              </View>
              <Pressable>
                <View style={styles.wrapperButtonFoto}>
                  <Text style={styles.textButtonFoto}>Change Foto</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapperFooter}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={styles.wrapperButton}>
            <ArrowSubmit />
            <Text style={styles.textButton}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default EditProfile

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
    marginBottom: responsiveHeight(120),
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
    borderWidth: 1,
    padding: 10,
    borderColor: colors.secondary,
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
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(20),
  },
  avatarImage: {
    height: responsiveHeight(180),
    width: responsiveWidht(165),
    resizeMode: 'cover',
  },
  wrapperAvatar: {
    borderWidth: 1,
    borderColor: colors.thirty,
    borderRadius: 25,
    height: responsiveHeight(180),
    width: responsiveWidht(165),
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  wrapperButtonFoto: {
    // flex:1,
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidht(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  textButtonFoto: {
    fontSize: 16,
    color: colors.white,
  },
})