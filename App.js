import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Abacaxi from './src/components/OlaMundo';
import Calcula from './src/components/Calcula';
import Saudacao from './src/components/Saudacao';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Abacaxi />*/}

     <View style={styles.header}>
      <Saudacao nome='Alex' />
     </View>
      
    <View style={styles.body}>
      <Calcula 
          somaA={70}
          somaB={32}

          subA={20}
          subB={5}
        />
    </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
    textAlign: 'right'
  },

  header: {
    backgroundColor: '#dadada',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    backgroundColor: 'white',
    marginLeft: 10
  }
});