import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native'
import reactotron from 'reactotron-react-native'

import styles from '../resources/Styles'
import { API_BASE_URL, API_METHODS } from '../resources/Constants'
import strings from '../resources/Strings'
import Loader from '../Common/Loader'
import FastImage from 'react-native-fast-image'
import { getRandomDarkColor, getRandomLightColor } from '../Common/Functions'
import CommonButton from '../Common/CommonButton'


export default function ProductList({ navigation }) {

    const [dataArr, setDataArr] = useState([])
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        getProductList()
    }, [])

    const listEmptyComponent = () => {
        if (loading) {
            return <Loader />
        }
        else {
            return <View style={[styles.flexRowAlignCenter, styles.flex1]}>
                <Text>{strings.global.NO_RECORDS_FOUND}</Text>
            </View>
        }
    }
    const getProductList = () => {
        axios.get(API_BASE_URL + API_METHODS.GET_PRODUCTS)
            .then((response) => {
                reactotron.log({ response })

                setIsLoading(false)
                setDataArr(response.data)
            })
            .catch((err) => {
                setIsLoading(false)
                // reactotron.log({ err })
            })
    }
    const onPressPlaceOrder = () => {
        navigation.navigate('mapView')

    }
    const onPressAddProduct=()=>{
        navigation.navigate('AddProduct')
    }
    const renderItem = ({ item, index }) => {
        return <TouchableOpacity
            style={[styles.flex1, styles.flexColumn, styles.m5, styles.boxShadow, styles.bgWhite, styles.alignItemCenter,
            { borderRadius: 20, paddingBottom: 10 }]}
        // onPress={ }
        >
            <View style={[styles.width100, { alignItems: 'flex-end', marginBottom: 3 }]}>
                <View style={[styles.flexRow, { backgroundColor: getRandomLightColor(index), paddingVertical: 8, paddingHorizontal: 5, borderBottomLeftRadius: 10 }]}>
                    <Text style={{ color: getRandomDarkColor(index) }}>$</Text>
                    <Text style={{ color: getRandomDarkColor(index) }}>{item?.product_price}</Text>
                </View>

            </View>
            <FastImage source={{ uri: item.product_image }} style={{ height: 100, width: '50%' }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>{item?.product_name}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'lightgray', marginBottom: 5 }}>{item?.product_desc}</Text>
            <CommonButton label='Place Order' onPress={onPressPlaceOrder} />
        </TouchableOpacity>
    }
    if (loading) {
        return <Loader />
    }
    return <View style={[styles.flex1, styles.flexColumn, styles.padding10]}>
        <View style={[styles.justifyContentEnd, styles.flexRowAlignCenter]}>
            <CommonButton
                label='Add Product'
                labelStyle={{ color: 'white' }}
                contentContainerStyle={{ backgroundColor: 'black', padding: 7, borderRadius: 5 }}
onPress={onPressAddProduct}
            />
        </View>
        <FlatList
            data={dataArr}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            ListEmptyComponent={listEmptyComponent}
            renderItem={renderItem}
        />
    </View>
}