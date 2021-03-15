import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import homeStyles from './style'

function HomeF(props) {
  
  return (
    <View style={homeStyles.container}>
      <TouchableOpacity  onPress={() => props.navigation.navigate("Boleto")}>
        <Text>{props.route.name}</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeF}  />
      <Tab.Screen name="Settings" component={HomeF}  />
    </Tab.Navigator>
  );
}

export default Home