import {StyleSheet, Platform} from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container:{
        alignSelf:'stretch',
        paddingHorizontal: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.white,
        alignItems: 'center'
    },
    title: {
        color: Color.black_color,
        fontSize: 16,
    },
    body:{
        borderBottomColor: Color.secondary_light,
        borderBottomWidth: 0.5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        padding: 10, 
        marginBottom: Platform.OS == 'android' ? 2 : 0
    },
    avatarContainer:{
        height: 40, 
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    subtitle:{
        color: Color.secondary_light,
        fontSize: 14,
        marginTop: 2,
        marginBottom: 2
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red'
    },
    dotContaienr:{
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 14
    },
    rightIconContaienr:{
        alignSelf :'stretch',
        borderBottomColor: Color.secondary_light,
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        marginBottom: Platform.OS == 'android' ? 2 : 0
    },
    icon: {
        paddingHorizontal: 5
    }
})