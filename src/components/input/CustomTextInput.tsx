import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './TextInput.style';
import { Color } from 'styles/Colors';

export const CustomTextInput = (props: CustomTextInputProps) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
            placeholderTextColor={Color.secondary_dark}
            value={props.value}
        />
    );

}


interface CustomTextInputProps {
    placeholder?: string,
    onChangeText?: (text: string) => void,
    secureTextEntry?: boolean,
    value?: string
}