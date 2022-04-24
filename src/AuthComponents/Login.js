import React, { useState } from "react";
import { View, Text, ScrollView,  TextInput } from 'react-native'
import FastImage from "react-native-fast-image";
import reactotron from "reactotron-react-native";

import styles from '../resources/Styles'
import { images } from "../resources/Images";
import strings from "../resources/Strings";
import colors from "../resources/Colors";
import CommonButton from "../Common/CommonButton";


export default function Login(props) {
    const [mobileNo, setMobileNo] = useState()
    const [loading, setLoading] = useState(false)

    const onChangeText = (value) => {
        setMobileNo(value)
    }
    const onSubmitMobileNo = () => {

    }
    return <ScrollView style={[styles.flex1, styles.padding10, styles.bgWhite]} keyboardShouldPersistTaps='handled'>
        <FastImage
            style={[styles.loginImage]}
            source={images.loginLogo}
            resizeMode={FastImage.resizeMode.contain}
        />
        <View style={[styles.alignItemCenter]}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: colors.blueMagenta }}>{strings.login.LOGIN}</Text>
            <Text style={[styles.width100, styles.font15]}>Enter Mobile no</Text>
            <TextInput
                value={mobileNo}
                keyboardType='numeric'
                onChangeText={onChangeText}
                style={[styles.inputStyle]}
            />
            <CommonButton onPress={onSubmitMobileNo} loading={loading} />
        </View>
    </ScrollView>
}