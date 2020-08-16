  
import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { styles as func_style } from './Channel.styles';
import { leaveFromChannel, deleteChannel, getMembersOfChannel } from './Channel.action';
import { Header, ListItem, UserListSkeleton } from '../../../components';
import { IContactDataProps, IUser } from '../../../interfaces';
import { store, IRootState } from '../../../store';
import { useSelector } from 'react-redux';
import { EContactType } from '../../../enums';
import { ProfileModal } from './components';

const INIT_PROFILE_DATA : IContactDataProps = {
    Id: 0,
    FullName: "",
    About: "",
    ProfileImage: "",
    Type: EContactType.INDIVIDUAL,
} 

interface IProfileModalState{
    visible: boolean,
    data: IContactDataProps
}

export const Channel = (props: any) => {
    useEffect(() => {
        getMembersOfChannel(props.data.Id);
      },[]);
    const [user] = useState<IUser>(store.getState().UserInfoResponse.user);
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CHANNEL);
    const [profileModal, setProfileModal] = useState<IProfileModalState>({visible: false, data: INIT_PROFILE_DATA});
    const styles = func_style();
    
    const data: IContactDataProps[] = useSelector<IRootState, any>((r_state: IRootState) => r_state.ChannelResponse.data);
    const channel_info : IContactDataProps = props.data;
    const loading: boolean = useSelector<IRootState, any>((r_state: IRootState) => r_state.ChannelResponse.loading);
    const is_manager = user.id === channel_info.CreatorId; // Determine the user is manager of the channel

    return (
        <View style={styles.container}>
            <Header
                back
                title={channel_info.FullName}
            />
            <ProfileModal 
                data={profileModal.data} 
                visible={profileModal.visible} 
                close={ () =>(setProfileModal({...profileModal, visible: false}))} 
                is_manager={is_manager}
            />
            {
                loading ?
                <UserListSkeleton />:
                null
            }
            {
                !loading ? 
                <FlatList 
                data={data}
                keyExtractor={(item, i) => item.Id.toString()}
                renderItem={({item}) => <ListItem 
                                            title={item.FullName} 
                                            avatarSource={item.ProfileImage}
                                            onPress={() => setProfileModal({visible: true, data: item})}
                                        />}
            /> :
            null
            }
            <ListItem title={language.LEAVE_CHANNEL} onPress={() => onPressLeaveFromChannel(channel_info.Id)} danger />
            {
                is_manager ?
                 <ListItem onPress={() => onPressDeleteChannel(channel_info.Id)} title={language.DELETE_CHANNEL} danger /> : 
                 null
            }
        </View>
    );
}

/**
 * On press the leave channel show warning alert    
 * @param id is channel id
 */
const onPressLeaveFromChannel = (id: number) => {
    const language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.temp_language.CHANNEL);
    Alert.alert(language.WARNING, 
                language.SURE_LEAVE, 
                [
                    {
                        text: language.NO,
                    },
                    {
                        text: language.YES,
                        onPress: () => leaveFromChannel(id)
                    }
                ])
}

/**
 * On press the delete channel, then show the warning alert
 * @param id is channel id
 */
const onPressDeleteChannel = (id: number) => {
    const language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.temp_language.CHANNEL);
    Alert.alert(language.WARNING, 
                language.SURE_DELETE_CHANNEL, 
                [
                    {
                        text: language.NO,
                    },
                    {
                        text: language.YES,
                        onPress: () => deleteChannel(id)
                    }
                ])
}

