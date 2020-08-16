  
import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import { styles as func_style } from './Template.styles';
import { Header, ListItem, CustomButton, CheckIcon } from 'components';
import { useSelector } from 'react-redux';
import { IRootState, store } from 'store';
import { ScrollView } from 'react-native-gesture-handler';
import { ETemplate } from 'enums';
import { Color } from 'styles/Colors';
import { fixTemplate, changeTemplate, saveChangedTemplate } from './Template.action';




export const Template = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.TEMPLATE);
    useEffect(() => {
        fixTemplate();
      });
    
    const styles = func_style();
    
    return (
        <View style={styles.container}>
            <Header
                title={language.TITLE}
                back
            />
            <ScrollContent />
            <View style={styles.bottom}>
                <CustomButton name={language.SAVE} onPress={saveChangedTemplate} />
            </View>
        </View>
    );
}

/**
 * The templates scroll content
 */
const ScrollContent = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.TEMPLATE);
    const template = useSelector<IRootState, any>((r_state: IRootState) => r_state.TemplateResponse.temporal_temp);
    console.log('Template : **', template);
    const styles = func_style();
    const TEMPLATES = [
        {
            type: ETemplate.DEFAULT,
            display: language.DEFAULT,
            color: '#F99E17'
        },
        // {
        //     type: ETemplate.DARK,
        //     display: language.DARK,
        //     color: '#000000'
        // },
        {
            type: ETemplate.PURPLE,
            display: language.PURPLE,
            color: '#536DFE'
        },
        {
            type: ETemplate.GREEN,
            display: language.GREEN,
            color: '#00BFA6'
        },
        {
            type: ETemplate.BLUE,
            display: language.BLUE,
            color: '#00B0FF'
        },
        {
            type: ETemplate.PINK,
            display: language.PINK,
            color: '#F50057'
        }
    ];
    return(
        <ScrollView>
                {Platform.OS == 'ios' ? <View style={styles.upper} /> : null}
                {
                    TEMPLATES.map((temp, i) => {
                        const left_style = {
                            backgroundColor: temp.color,
                            width: 30,
                            height: 30,
                            borderRadius: 15
                        }
                        let is_selected = temp.type == template;
                        return(
                            <ListItem 
                                key={i} 
                                onPress={() => changeTemplate(temp.type)} 
                                title={temp.display} 
                                leftIcon={<View style={left_style} />}
                                rightIcon={is_selected ? <CheckIcon size={20} color={Color.success} /> : null}
                            />
                        )
                    })
                }
            </ScrollView>
    );
}
