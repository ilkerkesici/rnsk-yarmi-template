import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: Color.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    full_name_text: {
        fontWeight: '500',
        marginBottom: 5,
        fontSize: 18
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    email_text: {
        fontSize: 16,
        color: Color.seconday
    }
});

