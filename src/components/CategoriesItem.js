import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


const CategoriesItem = ({item, onSelected}) => {
  return (
    <View style={{...styles.categoriesItem,...{backgroundColor: item.color}}}>
      <TouchableOpacity style={styles.container} onPress={()=>onSelected(item)}>
        <View style={styles.textContainer}>
            {/* <Text>{item.title}</Text> */}
            <Text>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={{uri:item.img}} style={styles.image} />
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
        borderRadius:10,
        marginVertical:15,
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
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius:10,

    }
})