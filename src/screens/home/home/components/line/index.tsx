import React from 'react';
import { styles as func_style} from '../../Home.styles';
import { View } from 'react-native';

export const Line = () => {
    const styles = func_style();
    return(
        <View style={styles.lineContainer}>
            <View style={styles.line} />
        </View>
    );
}