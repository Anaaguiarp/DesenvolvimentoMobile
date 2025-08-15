import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá Mundo!</Text>
      
      <Button 
      title='Botão normal' 
      color={'green'} 
      onPress={() => console.log("Clicou no botão")}
      />
      <AntDesign name='deleteuser' size={40} color={'#000'} />

      <TouchableOpacity style={styles.botaoComum}>
        <Text style={styles.textoDoBotao}>Botão touchable simples</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoComum}>
        <AntDesign name='instagram' size={40} color={"#fff"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoComum}>
        <View style={styles.botaoComTexto}>
          <AntDesign name='instagram' size={40} color={'#fff'} />
          <Text style={styles.textoDoBotao}>Siga @helton_azevedo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoComum: {
    backgroundColor: 'rgb(49, 49, 49)',
    padding: 20,
    borderRadius: 10,
    marginTop: 14,

  },
  textoDoBotao: {
    color: '#fff',
    fontSize: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  botaoComTexto: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
