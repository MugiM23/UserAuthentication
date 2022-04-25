import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import _get from 'lodash/get'
import reactotron from 'reactotron-react-native'

import styles from '../resources/Styles'

export default function TotalPrice({ navigation, route }) {

    const [totalPoints, setTotalPoints] = useState(0)

    useEffect(() => {
        getTotalPoints()
    }, [])

    const getTotalPoints = () => {
        let productDetails = _get(route, 'params.products', [])
        let totalPoints = productDetails.reduce((accumulated, val) => accumulated + Number(val.product_price), 0)
        setTotalPoints(totalPoints)
    }

    return <View style={[styles.flex1, styles.justifyCenter, styles.alignItemCenter, styles.padding10]}>
        <View style={[styles.padding10, styles.boxShadow, styles.bgWhite, styles.br5]}>
            <Text style={[styles.font20, styles.fontBold]}>{'Product Cart Details'}</Text>
            <View style={[styles.padding5]}>
                <Text>{`Total Products:  ${route?.params?.products?.length}`}</Text>
                <Text>{`Total Price:  ${totalPoints} Rs`}</Text>
            </View>
        </View>
    </View>
}