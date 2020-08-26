import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont()

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.views, styles.child]}>
        <Icon name="person" size={40} color="#000"></Icon>
        <Text>Perfil</Text></View>
      <View style={[styles.views, styles.child]}>
      <Icon name="camera-alt" size={40} color="#000"></Icon>
        <Text>Câmera</Text>
      </View>
      <View style={[styles.views, styles.child]}>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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

  child: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    elevation: 5,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
  },
});