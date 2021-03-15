import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import boletoStyles from './style'

function BoletoF(props) {
  
  return (
    <View style={boletoStyles.container}>
      <TouchableOpacity  onPress={() => props.navigation.navigate("Home")}>
        <Text>{props.route.name}</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Boleto() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Boleto" component={BoletoF}  />
      <Tab.Screen name="Settings" component={BoletoF}  />
    </Tab.Navigator>
  );
}

export default Boleto