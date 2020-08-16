  
import React from 'react';
import { View, Platform } from 'react-native';
import { styles as func_style } from './Language.styles';
import { Header, ListItem, CustomButton, CheckIcon } from 'components';
import { IRootState } from 'store';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { ELanguageType } from 'enums';
import { changeLanguage, saveSelectedLanguage } from './Language.action';
import { Color } from 'styles/Colors';



export const Language = () => {
    const language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.temp_language.LANGUAGE);
    const language_type = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.temp_language_string);
    const LANGUAGES = [
        {
            type: ELanguageType.TR,
            display: language.TURKISH
        },
        {
            type: ELanguageType.EN,
            display: language.ENGLISH
        }
    ];
    const styles = func_style();
    return (
        <View style={styles.container}>
            <Header
                title={language.TITLE}
                back
            />
            
            <ScrollView>
                {Platform.OS == 'ios' ? <View style={styles.upper} /> : null}
                {
                    LANGUAGES.map((lang, i) => {
                        let is_selected = language_type == lang.type;
                        console.log('Lang Type :', language_type);
                        console.log('row type: ', lang.type);
                        return(
                            <ListItem 
                                key={i} 
                                onPress={() => changeLanguage(lang.type)} 
                                title={lang.display} 
                                rightIcon={is_selected ? <CheckIcon size={20} color={Color.success} /> : null}
                            />
                        )
                    })
                }
            </ScrollView>
            <View style={styles.bottom}>
                <CustomButton name={language.SAVE} onPress={saveSelectedLanguage} />
            </View>
        </View>
    );
}


