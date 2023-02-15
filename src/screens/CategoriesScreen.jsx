import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoriesItem from "../components/CategoriesItem";
import { CATEGORIES } from "../data/categories";
const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = item =>{
    navigation.navigate('Products',{
      categoryId:item.id,
      title:item.title
    })
  }
  const renderCategoriesItem = ({item})=>(
  <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
  )
  return (
    <View style={styles.container}>
      <View style={styles.categoriescontainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategoriesItem}
          keyExtractor={item => item.id}
        />
        
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
  },
  categoriescontainer: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
