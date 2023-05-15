import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from '../../../utils/utils';
import { colors } from '../../../utils/colors';

const InputText = ({ title, type, keyboard, value = "" }) => {
  const [text, onChangeText] = React.useState(`${value}`);

  return (
    <View style={styles.wrapperInput}>
      <Text style={styles.textInput}>{title} :</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={type === 'password' ? true : false}
        onChangeText={onChangeText}
        value={text}
        placeholder={title}
        keyboardType={keyboard === 'number' ? "numeric" : 'default'}
      />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  wrapperInput: {
    marginBottom: responsiveHeight(15),
  },
  textInput: {
    fontSize: 15,
    fontWeight: '500',
    // color: colors.white,
  },
  input: {
    height: 40,
    marginTop: responsiveHeight(10),
    borderWidth: 1,
    padding: 10,
    borderColor: colors.secondary,
    borderRadius: 5,
  },
})