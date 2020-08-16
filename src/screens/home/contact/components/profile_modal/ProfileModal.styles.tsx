import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary_rgba,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'stretch'
    },
    card_container:{
        alignSelf: 'stretch',
        marginHorizontal: 20,
        backgroundColor: Color.white,
        borderRadius: 5,
        alignItems: 'center'
    },
    profilePhoto:{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: Color.white,
        marginTop: -50
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.black_color,
        marginHorizontal: 5
    },
    abaut:{
        marginTop: 5,
        fontSize: 16,
        color: Color.black_color,
        marginHorizontal: 5
    },
    bottom:{
        alignSelf: 'stretch',
        marginHorizontal: 5,
        marginVertical: 5,
        flexDirection: 'row'
    },
    parts:{
        flex: 1,
    }
});

