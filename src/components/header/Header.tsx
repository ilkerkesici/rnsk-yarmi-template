import React from 'react';
import { View, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { styles as func_Style } from './styles';
import { BackIcon } from '../icons';
import { Color } from 'styles/Colors';
import { onPressBack } from './Header.actions';

export const Header = (props: IHeader) => {
    const styles = func_Style();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Color.primary} />
            <View style={styles.instance}>
                <Left back={props.back} rightIcon={props.rightIcon} />
                <View style={styles.body}>
                    <Text numberOfLines={1} style={styles.title}> {props.title} </Text>
                    {props.subTitle
                        ? <Text style={styles.subTitle}> {props.subTitle} </Text>
                        : null}
                </View>
                <Right back={props.back} rightIcon={props.rightIcon} onRightIconPress={props.onRightIconPress} />
            </View>
        </View>
    );
}
export const Left = (props: IHeader) => {
    const styles = func_Style();
    if (props.back)
        return (
            <TouchableOpacity style={styles.iconWrapper} onPress={onPressBack}>
                <BackIcon color={Color.white} />
            </TouchableOpacity>
        );
    else if (Platform.OS == "ios" && props.rightIcon)
        return <View style={styles.iconWrapper} />
    return <View />
}

export const Right = (props: IHeader) => {
    const styles = func_Style();
    if (props.rightIcon) {
        return (
            <TouchableOpacity
                activeOpacity={props.onRightIconPress ? 0.5 : 1}
                style={styles.iconWrapper}
                onPress={() => props.onRightIconPress ? props.onRightIconPress() : null}
            >
                {props.rightIcon}
            </TouchableOpacity>
        );
    }
    else if (props.back) { // for center the title
        return (
            <View style={styles.iconWrapper} />
        );
    }
    return <View />
}

interface IHeader {
    back?: boolean,
    title?: string,
    subTitle?: string,
    rightIcon?: React.ReactNode,
    onRightIconPress?: () => void
}