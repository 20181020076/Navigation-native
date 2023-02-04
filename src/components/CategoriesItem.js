import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={styles.categoriesItem}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.textContainer}>
            {/* <Text>{item.title}</Text> */}
            <Text>Category item</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={''}/>
        </View>

      </TouchableOpacity>
    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
    categoriesItem:{
        width:'100%',
        height: 130,
        backgroundColor:'red',
        borderRadius:10,
        margin:10,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:2},
        shadowRadius:10,
        elevation:5

    },
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
        height: '100%',
    },
    textContainer:{
        width:'60%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center',

    },
    imageContainer:{
        width: '40%',
        height: '100%',
        backgroundColor: 'green',
    },
    image:{
        width: '100%',
        height: '100%',

    }
})