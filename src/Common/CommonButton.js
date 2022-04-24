import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import styles from "../resources/Styles";
import strings from "../resources/Strings";
import colors from "../resources/Colors";


export default function CommonButton({
    contentContainerStyle = styles.buttonStyle,
    labelStyle = styles.textWhite,
    label = strings.login.SUBMIT,
    onPress = () => { },
    loading = false,
}) {
    return <TouchableOpacity style={[contentContainerStyle, styles.flexRowAlignCenter]} onPress={onPress} disabled={loading}>
        {loading && <ActivityIndicator size='small' color={colors.white} />}
        <Text style={[labelStyle, styles.ph5]}>{label}</Text>
    </TouchableOpacity>
}