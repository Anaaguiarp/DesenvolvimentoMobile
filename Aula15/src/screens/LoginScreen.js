import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"



export default function LoginScreen({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if(login === "alex" && senha === "12345"){
            console.log("Logado!")
            navigation.navigate("Home")
        }else if(login === "" || senha === ""){
            console.log("O Login e senha devem ser preenchidos!")
        }else{
            console.log("Usuário e/ou senha incorretos")
        }
    }

    return(
        <View style={Estilo.container}>
            <Text style={Estilo.labelPrincipal}>Bem-vindo ao sistema XPTO</Text>
            <TextInput 
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
                autoCapitalize="none"
                style={Estilo.inp}
            />
            <TextInput 
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={Estilo.inp}
            />
            <Button title="Entrar" />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelPrincipal: {
        fontSize: 26,
        fontWeight: "500",
        marginBottom: 16
    },
    inp: {
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#dadada",
        padding: 16,
        marginBottom: 14
    }
})