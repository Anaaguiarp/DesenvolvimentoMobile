import { Text, StyleSheet } from 'react-native';

export default function(){
    return (
        <Text style={estilo.textoSaudacao}>Olá pessoa, seja bem-vind@</Text>
    );
}

const estilo = StyleSheet.create({
    textoSaudacao: {
        fontSize: 20,
        color: '#90b',
    }
});