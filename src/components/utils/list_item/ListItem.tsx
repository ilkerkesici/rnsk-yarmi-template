import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles as func_style } from './ListItem.style';
import { Color } from 'styles/Colors';

export const ListItem = (props: IListItem) => {
    const styles = func_style();
    const exta_title = props.danger ? {color: Color.danger} : null;
    return (
        <TouchableOpacity
            onPress={props.onPress ? props.onPress : () => null}
            activeOpacity={props.onPress ? 0.5 : 1}
            style={styles.container}
        >
            {props.avatarSource ? <Avatar size={props.avatarSize} source={props.avatarSource} /> : null}
            {props.leftIcon ? props.leftIcon : null}
            <View style={styles.body}>
                <Text style={[styles.title, exta_title]}>{props.title}</Text>
                {
                    props.subtitle ?
                        <Text numberOfLines={2} style={styles.subtitle}>{props.subtitle}</Text> :
                        null
                }
            </View>
            {props.rightDot ?
                <NotReadDot /> :
                null
            }
            {
                props.rightIcon ?
                <View style={styles.rightIconContaienr}>
                    {props.rightIcon}
                </View>:
                null
            }
        </TouchableOpacity>
    );
}

export const Avatar = (props: IAvatar) => {
    const extra_style = props.size ? {width: props.size, height: props.size, borderRadius: props.size / 2, marginVertical: 5} : null;
    const styles = func_style();
    return (
        <View style={[styles.avatarContainer, extra_style]}>
            <Image style={[styles.avatar, extra_style]} source={{ uri: props.source }} />
        </View>
    );
}

const NotReadDot = () => {
    const styles = func_style();
    return (
        <View style={styles.dotContaienr}>
            <View style={styles.dot} />
        </View>
    );
}

interface IListItem {
    title: string,
    avatarSource?: string,
    onPress?: () => void,
    subtitle?: string,
    rightDot?: boolean,
    rightIcon?: React.ReactNode,
    leftIcon?: React.ReactNode,
    avatarSize?: number,
    danger?: boolean
}

interface IAvatar {
    source: string,
    size?: number
}