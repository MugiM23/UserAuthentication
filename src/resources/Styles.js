import { StyleSheet, Dimensions } from 'react-native'

import colors from './Colors'

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    textWhite: {
        color: colors.white
    },
    flexRow: {
        flexDirection: 'row'
    },
    justifyContentEnd: {
        justifyContent: 'flex-end'
    },
    width100: {
        width: '100%'
    },
    fontBold: {
        fontWeight: 'bold'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    br5: {
        borderRadius: 5
    },
    br10: {
        borderRadius: 10
    },
    flexColumn: {
        flexDirection: 'column'
    },
    themeColor: {
        color: colors.blueMagenta
    },
    lavendarBg: {
        backgroundColor: colors.lavendar
    },
    padding10: {
        padding: 10
    },
    padding5: {
        padding: 5
    },
    ph5: {
        paddingHorizontal: 5
    },
    bgWhite: {
        backgroundColor: colors.white
    },
    font20: {
        fontSize: 20
    },
    font15: {
        fontSize: 15
    },
    m2: {
        margin: 2
    },
    m5: {
        margin: 5
    },
    loginImage: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height) / 2
    },
    flexRowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        width: '100%',
        margin: 2,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 5
    },
    buttonStyle: {
        backgroundColor: colors.blueMagenta,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5,
        borderRadius: 5
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8
    }

})

export default styles


