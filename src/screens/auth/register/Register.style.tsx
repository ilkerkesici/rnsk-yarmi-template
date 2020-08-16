import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        alignSelf: 'stretch',
        justifyContent :'center',
        alignItems: 'center',
        marginTop: 30
    },
    form: {
        marginHorizontal: 10,
        marginTop: 30
    },
    text: {
        color: Color.secondary_dark,
        fontSize: 14,
    },
    buttonText:{
        color: Color.primary_dark,
        fontSize: 14,
        fontWeight: 'bold'
    },
    scrollView:{
        
    }
});