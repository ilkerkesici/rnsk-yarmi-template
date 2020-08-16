import React from 'react';
import { Spinner } from '../../utils';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles as func_style } from './CustomButton.style';
import { Color } from 'styles/Colors';

export const CustomButton = (prosp: ICustomButton) => {
    const styles = func_style();
    if (prosp.loading)
        return (
            <View style={[styles.container, prosp.color ? {backgroundColor: prosp.color} : null]}>
                <View style={styles.withSpinnerContiner}>
                    <Text style={[styles.buttonText, styles.withSpinnerButtonText]}>{prosp.name}</Text>
                </View>
                <Spinner style={{width: 20}} size={"small"} color={Color.white} />
            </View>
        );
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={prosp.onPress} style={[styles.container, prosp.color ? {backgroundColor: prosp.color} : null]}>
            <Text style={styles.buttonText}> {prosp.name} </Text>
        </TouchableOpacity>
    );
}

interface ICustomButton {
    loading?: boolean,
    onPress: () => void,
    name: string,
    color?: string
}