import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrdersScreen from '../screens/OrdersScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Ordenes",
        }}
      />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({})