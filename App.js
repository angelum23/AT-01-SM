import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont()

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.views, styles.ident1]}>
        <Icon name="person" size={40} color="#000"></Icon></View>
      <View style={[styles.views, styles.ident2]}>
      <Icon name="camera-alt" size={40} color="#000"></Icon>
        <Text>Camera</Text>
      </View>
      <View style={[styles.views, styles.ident3]}>
        <Icon name="exit-to-app" size={40} color="#000"></Icon>
        <Text>Sair</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#CD3278',
  },
  views: {
    width: 300,
    height: 230,
    margin: 10,
    borderRadius: 8,
  },

  ident1: {
    backgroundColor: 'lightgray',
    elevation: 5,

  },
  ident2: {
    backgroundColor: 'lightgray',
    elevation: 5,
  },
  ident3: {
    backgroundColor: 'lightgray',
    elevation: 5,
  },
});