import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';

export default function Login(){
    return(
        <View style={Estilo.container}>
            <View style={Estilo.header}>
                <Image 
                    source={require("../../assets/img/logo.jpg")} 
                    style={Estilo.imgLogo}
                />
                <Text style={Estilo.txtLogin}>Login</Text>
            </View>
            <View style={Estilo.body}>
                <Text style={Estilo.label}>E-mail:</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="Enter your E-mail"
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoComplete="off"
                />

                <Text style={Estilo.label}>Password</Text>
                <TextInput 
                    style={Estilo.input}
                    placeholder="**********"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoComplete="off"
                    secureTextEntry={true}
                    autoCorrect={false}
                />
                <View style={Estilo.labelForgotContainer}>
                    <TouchableOpacity> {/* Transforma o que estiver dentro da tag em link/botão */}
                        <Text style={Estilo.labelForgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={Estilo.footer}>
                    <View style={Estilo.socialButtonsContainer}>
                        <TouchableOpacity style={Estilo.socialButton}>
                            <AntDesign 
                                name="google" 
                                style={Estilo.socialIcon} 
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={Estilo.socialButton}>
                            <AntDesign 
                                name="facebook-square" 
                                style={Estilo.socialIcon} 
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={Estilo.socialButton}>
                            <AntDesign 
                                name="instagram" 
                                style={Estilo.socialIcon} 
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={Estilo.sendFormContainer}>

                    </View>
                </View>
            </View>
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
    },
    header: {
        alignItems: 'center'
    },
    body: {
        textAlign: 'left',
        alignItems: 'flex-start',
        width: '80%'
    },
    label: {
        fontSize: 14,
        color: '#7A7A78',
        marginBottom: 6
    },
    input: {
        backgroundColor: '#E9F8FF',
        width: '100%',
        height: 40,
        padding: 10,
        color: '#7A7A78',
        borderColor: '#C2DDEE',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20
    },
    labelForgotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    labelForgot: {
        color: '#8EBFDD'
    },
    footer: {
        borderTopColor: '#D4E4F1',
        borderTopWidth: 1,
        width: '100%'
    },
    socialIcon: {
        color: '#51BCF4'
    },
    socialButton: {
        width: '80',
        height: '80',
        backgroundColor: '#B7E7FE',
        padding: 6,
        borderColor: '#A8D1E3',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center'
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    }

});