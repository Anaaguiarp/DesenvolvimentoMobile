import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function BotaoPersonalizado({pressCallback, texto = "Botão", cor = "#000"}){
    const handlePress = () => {
        console.log("FILHO: O botão foi pressionado! Avisando o pai");
        pressCallback("Olá pai, vindo do filho");
    }

    return(
        <View style={Estilo.container}>
            <TouchableOpacity 
                style={[Estilo.button, {backgroundColor: cor}]}
                onPress={handlePress}
            >
                <Text style={Estilo.buttonLabel}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#dadada"
    },
    button: {
        padding: 20
    }
})