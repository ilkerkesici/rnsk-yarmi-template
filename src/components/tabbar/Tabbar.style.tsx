import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    tabContainer:{
        alignSelf: 'stretch',
        height: 50,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: Color.white,
        bottom: 0,
        zIndex: 10,
        flexDirection: 'row',
    },
    iconsWrapper:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 5
    },
    homeIcon:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -32.5,
    },
    animated:{
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary,
        borderRadius: 30
    },
    homeTouchable:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

