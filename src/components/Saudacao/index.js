import { Text, View } from "react-native";


export default function Saudacao({nome = "Não identificado", call}){
    call("Valor vindo de filho!");
    return(
        <View>
            <Text>Seja bem-vindo {nome}</Text>
        </View>
    )
}