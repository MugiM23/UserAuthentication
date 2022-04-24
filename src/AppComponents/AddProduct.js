import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from '../resources/Styles'


export default function AddProduct() {

    const [productDetails, setProductDetails] = useState({ name: '', description: '', price: '' })

    const renderInputFields = () => {
        const inputFields = [
            {
                value: productDetails.name,
                label:'Name',
                placeHolder: 'Product Name',
                onChangeText: (value) => setProductDetails({ ...productDetails, name: value })

            },
            {
                value: productDetails.description,
                label:'Description',
                placeHolder: 'Product Description',
                onChangeText: (description) => setProductDetails({ ...productDetails, description: description })
            },
            {
                value: productDetails.price,
                label:'Price',
                placeHolder: 'Product Price',
                onChangeText: (price) => setProductDetails({ ...productDetails, price: price })
            },
        ]
       return inputFields.map((item, index) => {
            return <View style={[styles.width100, styles.padding10]}>
                <Text style={[styles.ph5]}>{item.label}</Text>
                <TextInput
                    key={index}
                    value={item.value}
                    placeholder={item.placeHolder}
                    onChangeText={item.onChangeText}
                    style={[styles.inputStyle]}
                />
            </View>
        })
    }

    return <View style={[styles.flex1, styles.alignItemCenter]}>
        <Text> You can add your product here</Text>
        {
            renderInputFields()
        }
    </View>
}