import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary_rgba,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        maxHeight: 400,
        alignSelf: 'stretch',
        backgroundColor: Color.white,
        marginHorizontal: 20,
        borderRadius: 5,
        padding: 5
    },
    tabContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: 34,
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontSize: 18, 
        fontWeight: '500',
        marginLeft: 10,
        marginRight: 10
    },
    content: {
        fontSize: 16,
        marginTop: 10,
        marginHorizontal: 10
    },
    bottom: {
        alignSelf: 'stretch',
        backgroundColor: Color.white,
        paddingVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    right:{
        flex: 1,
        alignItems: 'flex-end',
    },
    left:{
        flex: 1,
        alignItems: 'flex-start'
    },
    buttonDivider:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateWrapper: {
        alignSelf: 'stretch',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    upper_sub:{
        borderRadius: 5,
        backgroundColor: Color.white,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    time:{
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 5
    },
    date:{
        fontSize: 16,
        fontWeight: '500'
    },
    upper:{
        alignSelf: 'stretch',
        backgroundColor: Color.white,
        padding: 5,
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10
    }

});

