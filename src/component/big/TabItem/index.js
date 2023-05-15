import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Home, Homecolor, Wishlist, Wishlistcolor, Profile, Profilecolor } from '../../../assets'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { colors } from '../../../utils/colors'

const TabItem = ({ index, isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <Homecolor /> : <Home />
    }
    if (label === 'Wishlist') {
      return isFocused ? <Wishlistcolor /> : <Wishlist />
    }
    if (label === 'Profile') {
      return isFocused ? <Profilecolor /> : <Profile />
    }
    return <Home />
  }

  return (
    <TouchableOpacity
      style={styles.tabItem}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(isFocused)}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  text: (isFocused) => ({
    color: isFocused ? colors.primary : colors.secondary, fontSize: 11, marginTop: 4
  }),
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center'}
})