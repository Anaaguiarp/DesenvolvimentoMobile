import { Image, StyleSheet, Text, View } from "react-native";

export default function Login(){
    return(
        <View style={Estilo.container}>
            <View style={Estilo.logoContainer}>
                <Image 
                    source={require("../../assets/img/logo.jpg")} 
                    style={Estilo.imgLogo}
                />
            </View>
            <Text style={Estilo.txtLogin}>Login</Text>
        </View>
    )
}

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        width: 200,
        height: 200
    },
    txtLogin: {
        fontSize: 26,
        fontWeight: 'bold'

    }
});