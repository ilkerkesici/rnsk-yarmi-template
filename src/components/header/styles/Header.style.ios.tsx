import {StyleSheet} from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        backgroundColor: Color.primary,
        zIndex: 1
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        color: Color.white
    },
    instance:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginHorizontal: 10,
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