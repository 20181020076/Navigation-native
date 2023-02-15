import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const ProductsItem = ({ item, onSelected }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onSelected(item)}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>${item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    itemContainer: {
      flex: 1,
      borderRadius: 10,
      padding: 20,
      shadowColor: "black",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 5,
    },
    imageContainer: {
      flex: 1,
      height:100
    },
    textContainer: {
      flex: 1,
    },
    image: {
      height: "100%",
      width: "100%",
    },
  });
  
  export default ProductsItem;