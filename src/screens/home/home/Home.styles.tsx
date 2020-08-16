import { StyleSheet, Dimensions } from 'react-native';
import { Color } from 'styles/Colors';

const { height } = Dimensions.get('window');

export const LINE_WIDTH = 2;
export const BALL_WIDTH = 45;

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        zIndex: -3
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.background,
        borderTopEndRadius: 20
    },
    scroolView:{
        flex: 1,
        alignSelf: 'stretch',
        zIndex: -1
    },
    empty_text: {
        fontSize: 18,
        color: Color.secondary_dark,
        marginHorizontal: 20
    },
    line: {
        width: LINE_WIDTH,
        flex: 1,
        backgroundColor: Color.primary,
    },
    lineContainer:{
        marginLeft: 10,
        width: BALL_WIDTH,
        height: height,
        position: 'absolute',
        alignItems: 'center',
        zIndex: -2
    },
    header:{
        backgroundColor: Color.primary,
        alignSelf: 'stretch',
        paddingVertical: 30,
        zIndex: -1
        
    },
    dataContainer:{
        marginTop: 20,
        borderTopEndRadius: 20,
        flex: 1,
        alignSelf: 'stretch',
    },
    backView:{
        height: height / 2,
        right: 0,
        bottom: 0,
        //zIndex: -1,
        position: 'absolute',
        left: 0,
        backgroundColor: Color.background,
        zIndex: -2
    },
    primaryBackground:{
        backgroundColor: Color.primary,
        height: height,
        alignSelf: 'stretch',
        marginTop: -height
    }
});
