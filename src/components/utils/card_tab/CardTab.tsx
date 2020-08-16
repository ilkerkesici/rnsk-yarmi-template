  
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles as func_style } from './CardTab.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ICardTabProps{ 
    avatar: string,
    title: string,
    icon?: React.ReactNode,
    onIconPress?: () => void
 }

export const CardTab = (props: ICardTabProps) => {
    const styles = func_style();
    return (
        <View style={styles.tabContainer}>
            <Image source={{uri: props.avatar}} style={styles.avater}  />
            <Text numberOfLines={1} style={styles.nameText}>{props.title}</Text>
            {
                props.icon ? 
                <TouchableOpacity 
                    onPress={() => props.onIconPress ? props.onIconPress() : null } 
                    activeOpacity={props.onIconPress ? 0.5 : 1}
                    style={styles.icon}>
                    {props.icon}
                </TouchableOpacity>
                :
                null
            }
        </View>
    );
}


