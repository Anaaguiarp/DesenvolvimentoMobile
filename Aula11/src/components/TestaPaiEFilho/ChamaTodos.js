import Pai from "./Pai";
import Filho from "./Filho";
import { Button, Text, View } from "react-native";

export default function ChamaTodos(){
    return(
        <Pai>
            <Filho textoDoFilho="Texto inserido dentro filho" />
            <Filho textoDoFilho="Texto inserido dentro filho2" />
            <Text>Texto inserido dentro do Chama Todos</Text>
            <Button title="Título do Botão" />
            <View>
                <Button title="Botão na view" />
            </View>
        </Pai>
    )
}