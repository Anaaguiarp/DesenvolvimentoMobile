import { StyleSheet, Text, View, FlatList } from "react-native";
import { CARROS } from "../../data/carros";

const DADOS2 = [];

const Item = ({dado}) => (
    <View style={Estilo.items}>
        <Text style={Estilo.title}>{dado?.marca}</Text> {/*o "?" para tratamento de erro, tipo if ternário*/}
        <Text style={Estilo.detail}>{dado?.modelo}</Text>
        <Text style={Estilo.year}>{dado?.ano}</Text>
    </View>
)

export default function ListaCarros(){
    return(
        <View style={Estilo.container}>
            <FlatList
                data={CARROS} //Data
                keyExtractor={(item) => item.id} //KeyExtrator -> precisa ser String
                renderItem={({item}) => <Item dado={item} />} //RenderItem

                ListEmptyComponent={<Text>Não existem elementos na lista.</Text>}
            />
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    items: {
        backgroundColor: "#f5f5f5",
        padding: 12,
        borderRadius: 8,
        marginBottom: 4
    },
    title: {
        fontWeight: '600',
        marginBottom: 4,
        fontSize: 22
    },
    detail: {
        fontWeight: '300',
        fontSize: 18
    },
})