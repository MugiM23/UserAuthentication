import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import Login from "./Login";

const Stack = createStackNavigator()

export default function AuthStack() {
    return <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>
}