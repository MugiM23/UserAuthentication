import React from "react";
import { ActivityIndicator, View } from 'react-native'

import styles from "../resources/Styles";
import colors from "../resources/Colors";

export default function Loader() {
    return <View style={[styles.flex1, styles.flexRowAlignCenter, styles.justifyCenter]}>
        <ActivityIndicator size='large' color={colors.blueMagenta} />
    </View>
}