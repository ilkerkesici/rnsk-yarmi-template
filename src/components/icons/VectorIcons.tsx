import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { Color } from '../../styles/Colors';
Ionicons.loadFont();
MaterialIcons.loadFont();
AntDesignIcons.loadFont();
MaterialCommunityIcons.loadFont();

export const BackIcon = (props: IIconProps) => {
    return Platform.OS === 'ios' ? 
        <Ionicons name={'ios-arrow-back'} size={props.size || 30} color={props.color || Color.primary} /> :
        <MaterialIcons name={'arrow-back'} size={props.size || 30} color={props.color || Color.primary} />
}

export const RightArrowIcon = (props: IIconProps) => {
    return Platform.OS === 'ios' ? 
        <Ionicons name={'ios-arrow-forward'} size={props.size || 30} color={props.color || Color.primary} /> :
        <MaterialIcons name={'arrow-forward'} size={props.size || 30} color={props.color || Color.primary} />
}

export const CaretDownIcon = (props: IIconProps) => {
    return <AntDesignIcons name={'caretdown'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const LoginIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'login'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const LogoutIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'logout'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const SwapIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'swap-vertical'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const ClsoeIcon = (props: IIconProps) => {
    return <AntDesignIcons name={'close'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const FriendsIcon = (props: IIconProps) => {
    return <MaterialIcons name={'people'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const CreateIcon = (props: IIconProps) => {
    return <MaterialIcons name={'create'} size={props.size || 30} color={props.color || Color.primary} /> 
}
export const SearchIcon = (props: IIconProps) => {
    return <MaterialIcons name={'search'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const CheckIcon = (props: IIconProps) => {
    return <MaterialIcons name={'check'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const SettingIcon = (props: IIconProps) => {
    return <MaterialIcons name={'settings'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const HomeIcon = (props: IIconProps) => {
    return <MaterialIcons name={'home'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const ShareIcon = (props: IIconProps) => {
    return <MaterialIcons name={'share'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const LanguageeIcon = (props: IIconProps) => {
    return <MaterialIcons name={'language'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const ClockIcon = (props: IIconProps) => {
    return <MaterialIcons name={'access-time'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const TemplateIcon = (props: IIconProps) => {
    return <MaterialIcons name={'color-lens'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const PlusIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'plus'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const TeamIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'account-group'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const ThreeDotIcon = (props: IIconProps) => {
    return <MaterialCommunityIcons name={'dots-vertical'} size={props.size || 30} color={props.color || Color.primary} /> 
}

export const BellIcon = (props: IIconProps) => {
    if(props.num_of_data && props.num_of_data > 0)
        return(
            <View style={{padding: 5}}>
                <View style={styles.red_point}>
                    <Text style={styles.num_text}>{props.num_of_data}</Text>
                </View>
                <MaterialCommunityIcons name={'bell'} size={props.size || 30} color={props.color || Color.primary} /> 
            </View>
        );
    return <MaterialCommunityIcons name={'bell'} size={props.size || 30} color={props.color || Color.primary} /> 
}

interface IIconProps {
    color?: string,
    size?: number,
    num_of_data?: number
}

const styles = StyleSheet.create({
    iconContainer: {
        padding: 5
    },
    red_point: {
        backgroundColor: Color.danger,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        zIndex: 1,
    },
    num_text: {
        color: Color.white,
        fontSize: 10
    }
});



