import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function ProfileScreen(){
    const video = React.useRef(null);

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>Você está em Perfil</Text>
            <View style={Estilo.videoContainer}>
                <Video 
                    ref={video}
                    source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
                    /*useNativeControls para mostrar os controles do video*/
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    style={Estilo.vid}
                />

                <Video 
                    ref={video}
                    source={require("../assets/video/mov_bbb2.mp4")}
                    /*useNativeControls para mostrar os controles do video*/
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    style={Estilo.vid}
                />
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create({
    vid: {
        alignSelf: 'center',
        width: '100%',
        height: 250
    },
    videoContainer: {
        width: 300,
        height: 300
    }
})