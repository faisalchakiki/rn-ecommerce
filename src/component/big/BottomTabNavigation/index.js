import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import TabItem from '../TabItem';
import { colors } from '../../../utils/colors';
import { responsiveHeight, responsiveWidht } from '../../../utils/utils';

const BottomTabNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem key={index} label={label} isFocused={isFocused} onPress={onPress} onLongPress={onLongPress} />
        );
      })}
    </View>
  );
}

export default BottomTabNavigation

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: colors.white, paddingVertical: responsiveHeight(10), paddingHorizontal:responsiveWidht(30), borderTopWidth: 2, borderColor: colors.thirty, position: 'absolute', right: 0, left: 0, bottom: 0, zIndex: 50 }
})
