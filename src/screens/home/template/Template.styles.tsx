import { StyleSheet, Dimensions } from 'react-native';
import { Color } from 'styles/Colors';

const { height } = Dimensions.get('window');

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background
    },
    upper:{
        height,
        backgroundColor: Color.white,
        alignSelf: 'stretch',
        marginTop: -height
    },
    bottom: {
        alignSelf: 'stretch',
        padding: 20,
        bottom: 0,
    }
});

