import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Use this, for edit you app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}