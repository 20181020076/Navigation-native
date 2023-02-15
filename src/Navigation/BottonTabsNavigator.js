import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigation";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottonTabs = createBottomTabNavigator();

export default BottonTabsNavigator = () => {
  return (
    <BottonTabs.Navigator
      initialRouteName="Shoptab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottonTabs.Screen
        name="ShopTap"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="home" size={20} color="black" />
              <Text>Tienda</Text>
            </View>
          ),
        }}
      />
      <BottonTabs.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="cart" size={20} color="black" />
              <Text>Carrito</Text>
            </View>
          ),
        }}
      />
      <BottonTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.icon}>
              <Ionicons name="list" size={20} color="black" />
              <Text>Ordenes</Text>
            </View>
          ),
        }}
      />
    </BottonTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    bottom: 25,
    borderRadius: 15,
    height: 90,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
