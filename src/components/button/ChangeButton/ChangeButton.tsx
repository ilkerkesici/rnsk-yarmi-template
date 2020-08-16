import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles as func_style } from './ChangeButton.style';
import { SwapIcon } from '../../icons';
import { Color } from 'styles/Colors';

export const ChangeButton = (props: IChangeButton) => {
    const styles = func_style();
    return (
        <TouchableOpacity 
            activeOpacity={props.disable? 1 : 0} 
            onPress={() => props.disable ? null : props.onPress()} style={styles.container}
        >
            <SwapIcon color={Color.secondary_light} />
        </TouchableOpacity>
    );
}

interface IChangeButton {
    onPress: () => void,
    disable?: boolean
}