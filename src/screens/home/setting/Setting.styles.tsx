import { StyleSheet, Dimensions } from 'react-native';
import { Color } from 'styles/Colors';

const { height } = Dimensions.get('window');

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
    },
    divider:{
        alignSelf: 'stretch',
        height: 30,
    },
    upper:{
        height: height,
        alignSelf: 'stretch',
        marginTop: -height,
        backgroundColor: Color.white
    }
});

