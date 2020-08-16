import { StyleSheet, Dimensions } from 'react-native';
import { Color } from 'styles/Colors';

const { height } = Dimensions.get('window');

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: Color.primary,
        alignSelf: 'stretch',
        paddingVertical: 30,
        zIndex: -1
        
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
        borderTopEndRadius: 20
    },
    empty_text: {
        fontSize: 18,
        color: Color.secondary_dark,
        marginHorizontal: 20
    },
    primaryBackground:{
        backgroundColor: Color.primary,
        height: height,
        alignSelf: 'stretch',
        marginTop: -height
    },
    dataContainer:{
        //marginTop: 20,
        borderTopEndRadius: 20,
        flex: 1,
        alignSelf: 'stretch',
    },
    scroolView:{
        flex: 1,
        alignSelf: 'stretch',
        zIndex: -1
    },
});

