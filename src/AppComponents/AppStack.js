import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import ProductList from "../AuthComponents/ProductList";
import MapView from "../AuthComponents/MapView";
import AddProduct from './AddProduct'
import ViewTotalPrice from './ViewTotalPrice'


const Stack = createStackNavigator()

export default function AppStack() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="productList" component={ProductList} options={{headerTitle:'Products', headerShown:true}} />
        <Stack.Screen name="mapView" component={MapView} />
        <Stack.Screen name="AddProduct" component={AddProduct} options={{headerTitle:'Add Product', headerShown:true}} />
        <Stack.Screen name="ViewTotalPrice" component={ViewTotalPrice} options={{headerTitle:'Cart', headerShown:true}} />
    </Stack.Navigator>
}