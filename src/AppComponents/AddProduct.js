import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import CommonButton from '../Common/CommonButton'
import axios from 'axios'
import Toast from 'react-native-simple-toast'

import styles from '../resources/Styles'
import { API_BASE_URL, API_METHODS } from '../resources/Constants'


export default function AddProduct({ navigation }) {

    const [productDetails, setProductDetails] = useState({ name: '', description: '', price: '' })
    const [loading, setLoading] = useState(false)

    const renderInputFields = () => {
        const inputFields = [
            {
                value: productDetails.name,
                label: 'Name',
                placeHolder: 'Product Name',
                onChangeText: (value) => setProductDetails({ ...productDetails, name: value })
            },
            {
                value: productDetails.description,
                label: 'Description',
                placeHolder: 'Product Description',
                onChangeText: (description) => setProductDetails({ ...productDetails, description: description })
            },
            {
                value: productDetails.price,
                label: 'Price',
                placeHolder: 'Product Price',
                onChangeText: (price) => setProductDetails({ ...productDetails, price: price })
            },
        ]
        return inputFields.map((item, index) => {
            return <View style={[styles.width100, styles.padding10]} key={index}>
                <Text style={[styles.ph5]}>{item.label}</Text>
                <TextInput
                    value={item.value}
                    placeholder={item.placeHolder}
                    onChangeText={item.onChangeText}
                    style={[styles.inputStyle]}
                    keyboardType={item.label === 'Price' ? 'numeric' : 'default'}
                />
            </View>
        })
    }
    const addProduct = () => {
        if (productDetails.name === '') {
            Toast.show('Please enter product name')
            return false
        } else if (productDetails.description === '') {
            Toast.show('Please enter product description')
            return false
        } else if (productDetails.price === '') {
            Toast.show('Please enter product price')
            return false
        } else {
            let paramtersObj = {
                "name": productDetails.name,
                "price": Number( productDetails.price),
                "description": productDetails.description,
                "image": "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_trendingrooms_web_20012022_3.jpg"
            }
            setLoading(true)
            axios.post(API_BASE_URL + API_METHODS.ADD_PRODUCTS, { ...paramtersObj })
                .then((response) => {
                    setLoading(false)
                    if (response.status === 200) {
                        navigation.goBack()
                    }
                })
                .catch((err) => {
                    setLoading(false)
                })
        }
    }
    return <View style={[styles.flex1, styles.alignItemCenter]}>
        <Text> You can add your product here</Text>
        {
            renderInputFields()
        }
        <CommonButton onPress={addProduct} loading={loading} />
    </View>
}