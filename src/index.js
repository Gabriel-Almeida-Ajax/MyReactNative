import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { styles } from './styles';
import * as React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Page from './pages/index'

const Stack = createStackNavigator();

const StackConfig = {
  headerShown: false,
  headerStyle: { backgroundColor: '#ffd573',  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={StackConfig} headerMode="float" animation="spring">
        <Stack.Screen name="Home" component={Page.Home} />
        <Stack.Screen name="Boleto" component={Page.Boleto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}