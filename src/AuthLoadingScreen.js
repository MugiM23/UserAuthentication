import React, { useState, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack'

import AuthStack from './AuthComponents/AuthStack'
import AppStack from "./AppComponents/AppStack";
import Loader from "./Common/Loader";

export default function AuthLoadingScreen() {
    const Stack = createStackNavigator()
    const [isSignedIn, setIsSignedIn] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500);
    }, [])

    if (isLoading) {
        return <Loader/>
    }
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
            isSignedIn
                ? <Stack.Screen name="home" component={AppStack} />
                : <Stack.Screen name="auth" component={AuthStack} />

        }
    </Stack.Navigator>
}