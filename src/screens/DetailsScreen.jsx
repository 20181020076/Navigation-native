import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'

const DetailsScreen = ({navigation, route}) => {
  useEffect(()=>{
    console.log(route.params)
  },[])
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button title='Go to Categories' onPress={()=> navigation.popToTop()}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
})