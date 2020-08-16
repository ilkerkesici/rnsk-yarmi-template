  
import React, { useState } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { styles as func_style  } from './CreateChannel.styles';
import { closeCreateChannelModal } from '../../Contact.action';
import { IRootState, store } from 'store';
import { useSelector } from 'react-redux';
import { CustomTextInput, CustomButton } from 'components';


interface ICreateChannelProps{ }

export const CreateChannel = (props: ICreateChannelProps) => {
    const [language] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    const [name, setName] = useState<string>("");
    const styles = func_style();
    const visible = useSelector<IRootState, any>((r_state: IRootState) => r_state.ContactResponse.create_channel_visible);
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
        <TouchableOpacity onPress={closeCreateChannelModal} style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.card}>
                <CustomTextInput value={name} placeholder={language.CHANNEL_NAME} onChangeText={setName} />
                <View style={{margin: 5}} />
                <CustomButton name={language.CREATE} onPress={() => null} />
            </TouchableOpacity>
        </TouchableOpacity>
        </Modal>
    );
}



