import {StyleSheet} from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: Color.primary,
        zIndex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: Color.white
    },
    instance:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    iconWrapper:{
        alignSelf: 'stretch',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 12,
        marginTop: 2,
        color: Color.secondary_light,
        marginBottom: 2
    }
})