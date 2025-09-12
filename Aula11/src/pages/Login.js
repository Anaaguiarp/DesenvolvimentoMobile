import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin(){
        if(login === "helton" && senha === "123"){
            setMessage("Usuário Logado");
        }else{
            setMessage("Usuário e/ou senha incorretos!");
        }
    }

    return(
        <View style={Estilo.container}>
            <Text style={Estilo.labelLogin}>Login</Text>
            <TextInput
                placeholder="Digite o login"
                style={Estilo.inputEstilo}
                onChangeText={(tex) => setLogin(tex)}
            />
            
            <TextInput 
                placeholder="Digite a senha"
                style={Estilo.inputEstilo}
                onChangeText={(senhaDigitada) => setSenha(senhaDigitada)}
            />

            <TouchableOpacity 
                style={Estilo.buttonEstilo}
                onPress={() => handleLogin()}
            >
                <Text style={Estilo.txtButton}>Logar</Text>
            </TouchableOpacity>
            <Text style={Estilo.txtMessage}>{message}</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputEstilo: {
        borderWidth: 1,
        padding: 12,
        borderColor: '#dadada'
    },
    buttonEstilo: {
        backgroundColor: 'silver',
        padding: 14,
        width: 120,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtButton: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18
    }
})