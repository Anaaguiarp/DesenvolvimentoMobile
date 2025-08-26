import { StyleSheet, Text, View } from "react-native"

import Saudacao from "../components/Saudacao";

export default function Home() {
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.titulo}>Pagina Inicial</Text>
            <Saudacao nome="Helton Azevedo"/>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 40
    }
})