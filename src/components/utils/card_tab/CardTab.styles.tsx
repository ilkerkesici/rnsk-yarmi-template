import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    tabContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    avater:{
        width: 34,
        height: 34,
        borderRadius: 17,
        marginHorizontal: 10
    },
    nameText:{
        fontSize: 18,
        fontWeight: '500',
        color: Color.black_color,
        flex: 1
    },
    icon:{
        padding: 4,
        marginLeft: 4,
    }
});

