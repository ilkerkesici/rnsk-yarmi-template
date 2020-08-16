  
import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { styles as func_style } from './Setting.styles';
import { store, IRootState } from '../../../store';
import { Header, ListItem, RightArrowIcon, LanguageeIcon, LoginIcon, LogoutIcon, TemplateIcon } from '../../../components';
import { ProfileLine } from './component';
import { Color } from 'styles/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { IUser } from 'interfaces';
import { useSelector } from 'react-redux';
import { EUserRole } from 'enums';
import { Actions } from 'react-native-router-flux';


export const Setting = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.SETTING);
    const user: IUser = useSelector<IRootState, any>((r_state: IRootState) => r_state.UserInfoResponse.user);
    const styles = func_style();
    const BUTTONS = [
        {
            title: language.LANGUAGE,
            onPress: () => Actions.language(),
            icon: <LanguageeIcon size={20}  />
        },
        {
            title: language.TEMPLATE,
            onPress: () => Actions.template(),
            icon: <TemplateIcon size={20}  />
        },
        {
            title: user.role == EUserRole.ANONYMOUS ? language.LOGIN : language.LOGOUT,
            onPress: () => null,
            icon: user.role == EUserRole.ANONYMOUS ? <LoginIcon size={20}  /> : <LogoutIcon size={20}  />
        },
    ];
    
    return (
        <View style={styles.container}>
            <Header 
                title={language.TITLE}
            />
            <ScrollView>
            {Platform.OS === 'ios' ? <View style={styles.upper} /> : null}
            <ProfileLine />
            <View style={styles.divider} />
            {
                BUTTONS.map((res, i) => 
                    <ListItem 
                        key={i}
                        title={res.title} 
                        leftIcon={res.icon} 
                        onPress={res.onPress} 
                        rightIcon={<RightArrowIcon size={20} color={Color.seconday} />}  
                        />
                )
            }
            </ScrollView>
        </View>
    );
}


