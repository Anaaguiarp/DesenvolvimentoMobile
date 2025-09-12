<<<<<<< HEAD
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
//Hooks
import{ useState } from "react";

export default function Home(){
    //let nome = "";
    const [nome, setNome] = useState("Usuário");
    const [contador, setContador] = useState(0);

    return(
        <View style={Estilo.container}>
            <Text style={Estilo.labelPrincipal}>Página principal</Text>

            <TextInput
                placeholder="Digite o seu nome"
                style={Estilo.inputPrincipal}
                onChangeText={(texto) => {
                    console.log("Valor do nome: ", nome);
                    console.log("Valor de texto: ", texto);

                    setNome(texto);
                    
                    console.log("Novo valor de nome: ", nome);
                }}
                value={nome}
            />

            <Text style={Estilo.labelSecundario}>Seja Bem-vindo, {nome}</Text>
            <View style={Estilo.contadorContainer}>
                <Button
                    title="+"
                    onPress={() => setContador(contador < 10 ? contador + 1 : 10)}
                />
                <Text style={Estilo.labelSecundario}>Você clicou {contador} vezes!</Text>
                <Button
                    title="-"
                    onPress={() => setContador(contador > 0 ? contador - 1 : 0)}
                />
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    labelPrincipal: {
        fontSize: 32,
        fontWeight: '700',
    },
    inputPrincipal: {
        borderWidth: 1,
        padding: 8,
        marginTop: 6
    },
    labelSecundario: {
        fontSize: 26,
        fontWeight: '400'
    },
    contadorContainer: {
        marginTop: 12,
        backgroundColor: "#dadada"
    }
=======
import { SafeAreaView, StyleSheet, Text } from "react-native";
import ListaCarros from "../components/ListaCarros";
import Pessoas from "../components/Pessoas";
import ExibeCards from "../components/ExibeCards";

export default function Home(){
    return(
        <SafeAreaView style={Estilo.container}>
            <ExibeCards />
            
            {/*
                <Text style={Estilo.labelPrincipal}>
                    Pagina HOME
                </Text>
                <ListaCarros />
                <Pessoas />
            */}
        </SafeAreaView>
    )
}

const Estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelPrincipal:{
        fontSize: 22,
    },
>>>>>>> 6d85a3520b16b1dd01fe12634577915684e1b321
})