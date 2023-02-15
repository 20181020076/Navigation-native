import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        //headerStyle: { backgroundColor: COLORS.primary },
        //headerTintColor: COLORS.secundary,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Mi Panaderia",
        }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};
