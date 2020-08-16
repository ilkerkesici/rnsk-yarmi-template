import { StyleSheet } from 'react-native';
import { Color } from 'styles/Colors';

export const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.primary_rgba,
        justifyContent: "center",
        alignItems: "center"
    },
    card:{
        alignSelf: "stretch",
        marginHorizontal: 20,
        backgroundColor: Color.white,
        borderRadius: 5,
        padding: 10,
    },
    
});

