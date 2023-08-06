import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from '../pages/SingIn';
import ChatRoom from '../pages/ChatRoom'
import Messages from '../pages/Messages'
import Search from '../pages/Search'

const AppStack = createNativeStackNavigator();

function AppRoutes() {
    //initialRouteName chama a rota que vai iniciar
    return (
        <AppStack.Navigator initialRouteName="ChatRoom">
            <AppStack.Screen
                name="SingIn"
                component={SingIn}
                options={{
                    title: "Faça o login"
                }}
            />

            <AppStack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="Messages"
                component={Messages}
                options={({ route }) => ({
                    title: route.params.thread.name
                })}
            />

              <AppStack.Screen
                name="Search"
                component={Search}
                options={({ route }) => ({
                    title: 'Procurando algum grupo?'
                })}
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes;