import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: Color.primary,
        padding: 10,
        flexDirection: 'row',
        marginVertical: 10
    },
    buttonText:{
        color: Color.white,
        fontSize: 16,
        marginHorizontal: 5,
    },
    withSpinnerContiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    withSpinnerButtonText: {
        marginRight: -15
    }
});