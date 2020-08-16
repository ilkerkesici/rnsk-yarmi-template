import { store } from "store"
import { TEMP_LANG_NAME_CHANGED, TEMP_LANGUAGE_CHANGED, LANGUAGE, CURRENT_LANGUAGE_STRING } from "../../../reducers/Types";
import { ELanguageType } from "enums";
import { Actions } from "react-native-router-flux";
import { saveLanguage } from "helpers";

/**
 * Change language temproarly
 */
export const changeLanguage = (new_language: ELanguageType) => {
    const dispatch = store.dispatch;
    const current = store.getState().AppLanguageResponse.temp_language_string;
    if(new_language == current) return;
    let language_data;
    if (new_language === ELanguageType.TR)
        language_data = require(`../../../assets/languages/tr.json`);
    else language_data = require(`../../../assets/languages/en.json`); 
    dispatch({type: TEMP_LANG_NAME_CHANGED, payload: new_language});
    dispatch({type: TEMP_LANGUAGE_CHANGED, payload: language_data});
}

/**
 * Save the selected language
 */
export const saveSelectedLanguage = async () => {
    const state = store.getState().AppLanguageResponse;
    const dispatch = store.dispatch;
    if(state.temp_language_string == state.currentLanguage){
        Actions.pop();
        return;
    }
    let language_data;
    if (state.temp_language_string === ELanguageType.TR)
        language_data = require(`../../../assets/languages/tr.json`);
    else language_data = require(`../../../assets/languages/en.json`);
    await saveLanguage(state.temp_language_string);
    dispatch({ type: LANGUAGE, payload: language_data});
    dispatch({ type: CURRENT_LANGUAGE_STRING, payload: state.temp_language}); 
}