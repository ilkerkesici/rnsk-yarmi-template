  
import React, { useState } from 'react';
import { ListItem, TeamIcon } from 'components';
import { EContactType } from 'enums';
import { IContactDataProps } from 'interfaces';
import { ProfileModal } from '../profile_modal';
import { Color } from 'styles/Colors';
import { Actions } from 'react-native-router-flux';


interface IContactRowProps{ 
    data: IContactDataProps
 }

export const ContactRow = (props: IContactRowProps) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const onPress = () => {
        if(props.data.Type === EContactType.TEAM){
            Actions.channel({data: props.data});
            return;
        }
        setModalVisible(true);
    }
    return (
            <>
            <ProfileModal data={props.data} visible={modalVisible} close={() => setModalVisible(false)} />
            <ListItem 
                title={props.data.FullName} 
                avatarSource={props.data.ProfileImage}
                avatarSize={40}
                onPress={onPress}
                rightIcon={props.data.Type === EContactType.TEAM ? <TeamIcon color={Color.black_color} size={24} /> : undefined}
            />
            </>
    );
}






