import { StatusBar } from 'expo-status-bar';
import BottonTabsNavigator from './src/Navigation/BottonTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <BottonTabsNavigator/>
    </NavigationContainer>
    
  );
}

