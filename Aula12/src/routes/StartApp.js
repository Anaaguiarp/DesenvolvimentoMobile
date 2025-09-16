import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Stack = createNativeStackNavigator();

export default function StartApp(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Perfil" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}