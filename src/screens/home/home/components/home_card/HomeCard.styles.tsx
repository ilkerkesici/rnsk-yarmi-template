import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';
import {BALL_WIDTH, LINE_WIDTH} from '../../Home.styles';

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    dateContainer:{
        width: 100,
        alignSelf: 'stretch',
        //backgroundColor: 'blue',
    },
    lineContainer:{
        alignSelf: 'stretch',
        alignItems: 'center',
        marginLeft: 10
    },
    shortLine:{
        height: 10,
        width: LINE_WIDTH,
        backgroundColor: Color.primary
    },
    ball:{
        height: BALL_WIDTH,
        width: BALL_WIDTH,
        borderRadius: BALL_WIDTH / 2,
        backgroundColor: Color.primary,
    },
    longLine:{
        width: LINE_WIDTH,
        backgroundColor: Color.primary,
        flex: 1,
    },
    cardContainer:{
        marginHorizontal: 10,
        alignSelf: 'stretch',
        //height: 80,
        marginBottom: 25,
        backgroundColor: Color.white,
        borderRadius :5,
        marginTop: 10,
        padding: 10
    },
    cardMainContainer:{
        alignSelf: 'stretch',
        flex: 1,
    },
    tabContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: 34,
        alignItems: 'center',
        marginBottom: 10
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
        color: Color.black_color
    },
    contentText: {
        fontSize: 16,
        color: Color.black_color
    },
    date:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    month:{
        fontWeight: '500',
        fontSize: 16
    },
    time:{
        marginTop: 8,
        alignContent: 'flex-end',
        alignSelf: 'stretch'
    },
    leftAction: {flex: 1, backgroundColor: Color.background, alignItems: 'flex-end'},
    actionView: {width: 100, backgroundColor: Color.white, marginTop: 10, borderRadius: 5, padding: 5},
    tabDivider: {marginBottom: 10},
    skeletonContainer:{
        flexDirection: 'row'
    },
    skeletonDivider:{
        marginVertical: 5,
    },
    skeletonCard:{
        height: 140
    }
});

