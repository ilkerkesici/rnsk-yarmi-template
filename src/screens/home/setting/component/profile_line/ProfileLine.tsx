  
import React from 'react';
import { View, Text } from 'react-native';
import { styles as func_style } from './ProfileLine.styles';
import { IRootState } from 'store';
import { useSelector } from 'react-redux';
import { Avatar, RightArrowIcon } from 'components';
import { Color } from 'styles/Colors';
import { IUser } from 'interfaces';

interface IProfileLineState{ }
interface IProfileLineProps{ }

export const ProfileLine = (props: IProfileLineProps) => {
    const user: IUser = useSelector<IRootState, any>((r_state: IRootState) => r_state.UserInfoResponse.user);
    const styles = func_style();
    return (
        <View style={styles.container}>
            <Avatar size={60} source={user.profile_image} />
            <View style={styles.body}>
                <Text numberOfLines={1} style={styles.full_name_text}>{user.full_name}</Text>
                {
                    user.email ? 
                    <Text numberOfLines={1} style={styles.email_text}>{user.email}</Text> :
                    null
                }
            </View>
            <RightArrowIcon size={20} color={Color.seconday} />
        </View>
    );
}


