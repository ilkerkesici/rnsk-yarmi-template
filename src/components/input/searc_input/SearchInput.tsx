  
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './SearchInput.styles';
import { SearchIcon } from '../../icons';
import { Color } from 'styles/Colors';


interface ISearchInputState{ }
interface ISearchInputProps{
    placeholder?: string,
    onChangeText?: (text: string) => void,
    value?: string
 }

export const SearchInput = (props: ISearchInputProps) => {
    const [state, setState] = useState<ISearchInputState>({ });

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <SearchIcon size={30} color={Color.secondary_dark}  />
            </View>
            <TextInput value={props.value} onChangeText={props.onChangeText} placeholder={props.placeholder} style={styles.textInput} />
        </View>
    );
}


