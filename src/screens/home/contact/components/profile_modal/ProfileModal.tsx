  
import React, { useState } from 'react';
import { Modal, TouchableOpacity, Image, Text, View } from 'react-native';
import { styles as func_styles } from './ProfileModal.styles';
import { IContactDataProps } from 'interfaces';
import { CustomButton } from 'components';
import { Color } from 'styles/Colors';
import { deleteContact } from '../../Contact.action';
import { store } from 'store';


interface IProfileModalProps{ 
    visible: boolean,
    close: () => void,
    data: IContactDataProps
 }

export const ProfileModal = (props: IProfileModalProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.CONTACT);
    const styles = func_styles();
    const onPressUyarmi = () => {
        props.close();
        // TODO: Go to Uyar Mı? Page
    }

    const onPressDelete = async () => {
        setLoading(true);
        await deleteContact(props.data);
        setLoading(false);
        props.close();
    }

    return (
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={props.visible}
        >
            <TouchableOpacity
                style={styles.container}
                onPress={props.close}
            >
                <TouchableOpacity
                    style={styles.card_container}
                    activeOpacity={1}
                >
                    <Image source={{uri: props.data.ProfileImage}} style={styles.profilePhoto} />
                    <Text style={styles.name}>{props.data.FullName}</Text>
                    <Text style={styles.abaut}>{props.data.About}</Text>
                    <View style={styles.bottom}>
                        <View style={styles.parts}>
                            <CustomButton name={'Uyar mı?'} onPress={onPressUyarmi} />
                        </View>
                        <View style={styles.parts}>

                        </View>
                        <View style={styles.parts}>
                            <CustomButton loading={loading} name={language.DELETE_CONTACT} onPress={onPressDelete} color={Color.danger} />
                        </View>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
}


