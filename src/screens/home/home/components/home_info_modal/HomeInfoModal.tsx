
import React, { useState } from 'react';
import { View, Modal, Text } from 'react-native';
import { styles as func_style } from './HomeInfoModal.styles';
import { CardTab, ShareIcon, CustomButton, Spinner, ClockIcon } from 'components';
import { ScrollView } from 'react-native-gesture-handler';
import { Color } from 'styles/Colors';
import { store } from 'store';
import { shareActivity, deleteActivity } from '../../Home.action';
import { IHomeData } from 'interfaces';


interface IHomeInfoModalProps {
    visible: boolean,
    data: IHomeData,
    close: () => void
}

export const HomeInfoModal = (props: IHomeInfoModalProps) => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.HOME);
    const [laoding, setLoading] = useState<boolean>(false);
    const styles = func_style();
    const deleteThis = async () => {
        setLoading(true);
        await deleteActivity(props.data);
        setLoading(false);
        props.close();
    }

    return (
        <Modal
            visible={props.visible}
            animationType='fade'
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.upper}>
                <CardTab
                        avatar={props.data?.MeetWith.ProifleImage}
                        title={props.data?.MeetWith.Fullname}
                        icon={props.data.Invite ? <ShareIcon size={30} color={Color.black_color} /> : undefined}
                        onIconPress={props.data.Invite ? () => shareActivity(props.data) : undefined}
                    />
                </View>
                <View style={styles.card}>
                <DateView date={props.data.Date} />
                    <ScrollView>
                        <Text style={styles.title}>{props.data.Title}</Text>
                        <Text style={styles.content}>{props.data.Content}</Text>
                    </ScrollView>
                    <View style={styles.bottom}>
                        <View style={styles.left}>
                            <CustomButton name={language.CLOSE} onPress={props.close} />
                        </View>
                        <View style={styles.buttonDivider}>
                            {laoding ? <Spinner size={'small'} color={Color.danger} /> : null}
                        </View>
                        <View style={styles.right}>
                            {/* TODO: Şu anki kullanıcı ile publisher uyuşup uyşmadığı kontrol edilecek */}
                            <CustomButton
                                name={language.DELETE}
                                color={Color.danger}
                                onPress={deleteThis} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const DateView = (props: IDateView) => {
    const styles = func_style();
    return (
        <View style={styles.dateWrapper}>
            <View style={styles.upper_sub}>
                <ClockIcon size={30} />
                <Text style={styles.time}>24 Haziran 2020  23:30</Text>
            </View>
        </View>
    );
}

interface IDateView {
    date: Date
}