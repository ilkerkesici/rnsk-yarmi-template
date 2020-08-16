import { StyleSheet, Platform } from 'react-native';
import {  Color } from 'styles/Colors';

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: Color.white,
        padding: Platform.OS === 'ios' ? 5 : 0,
        borderRadius: Platform.OS === 'ios' ? 5 : 0,
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center',
        zIndex: 5
    },
    textInput:{
        fontSize: 16,
        alignSelf: 'stretch',
        marginLeft: 5,
        flex: 1
    },
    icon:{
        marginLeft: Platform.OS == 'android' ? 5 : 0
    }
});

