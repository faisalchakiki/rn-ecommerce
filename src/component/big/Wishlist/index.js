import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidht } from '../../../utils/utils'
import { Kaos } from '../../../assets'
import { colors } from '../../../utils/colors'
import { Touchable } from 'react-native'
// import { dummyProduct } from '../../../data/dummyProduct.js'
import { CardWishlist } from '../../small'

const WishlistProduct = ({navigation}) => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    // Panggil API untuk mendapatkan data dari server
    dataProducts();
  }, []);

  const dataProducts = async () => {
    // const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const response = await fetch(`https://dummyjson.com/products?limit=6`);
    const jsonData = await response.json();
    const dataProducts = jsonData.products
    const filteredData = dataProducts.filter((item) => !data.some((existingItem) => existingItem.id === item.id));
    setData([...data, ...filteredData]);
    setLimit(limit + 6);
    // console.log(data)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>Wishlist Product</Text>
      {/* <Text style={styles.titleSection}>{data.toString()}</Text> */}
      <FlatList
        data={data}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <CardWishlist product={item} navigation={navigation} />
        )}
        onEndReached={dataProducts}
        onEndReachedThreshold={0.5}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          flex: 1,
          alignItems: 'flex-start',
        }}
      />
    </View>
  )
}

export default WishlistProduct

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidht(15),
    paddingTop: responsiveHeight(10),
    // alignItems:'flex-start',
  },
  titleSection: {
    fontSize: 16,
    paddingHorizontal: responsiveWidht(10),
    fontWeight: '500',
    color: "black",
    marginBottom: responsiveHeight(15),
  },
})