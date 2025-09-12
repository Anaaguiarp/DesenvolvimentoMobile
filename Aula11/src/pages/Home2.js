import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home2(){
    const [ligado, setLigado] = useState(false);
    const [cor, setCor] = useState("white");
    const [tempo, setTempo] = useState(0);

    return(
        <View style={[Estilo.container, {backgroundColor: cor}]}>
            <Text>Home 2</Text>
            <Text style={Estilo.labelPrincipal}>Status: {ligado ? "Ligado 👍" : "Desligado 👎"}</Text>
            <Button
                title={ligado ? "Desligar" : "Ligar"}
                onPress={() => setLigado(!ligado)}
            />

            <Button
                title="Vermelho" 
                onPress={() => setCor('red')}
            />

            <Button
                title="Verde" 
                onPress={() => setCor('green')}
            />

            <Button
                title="Azul" 
                onPress={() => setCor('blue')}
            />
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
        fontSize: 16,
        fontWeight: "500"
    }
})