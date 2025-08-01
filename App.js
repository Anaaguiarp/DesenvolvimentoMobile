import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sauda from './src/components/saudacao';

/*

Comando no cmd para instalar (inicialmente) e executar

npm install --global expo-cli
npx create-expo-app aula01 --template   ----> escolher "Blank"
npx expo start
w
(copiar comando de dependencias necessárias)

*/

// ao dar um "export default, a função torna-se padrão"
export default function App() {
  return ( // retorno de código jsx (parênteses)
    <View style={styles.container}>
      <Text style={{color: 'red', fontWeight: 'bold', fontSize: 26}}>Olá Mundo!</Text>
      <Text style={styles.textoSecundario}>Primeiro texto inserido no aplicativo.</Text>

      <Sauda/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoSecundario: {
    color: '#000',
    fontSize: 22,

  }
});