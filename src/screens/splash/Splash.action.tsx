
import { NativeModules, Platform } from 'react-native';
import { getUserInfo, 
         APIHelper, 
         saveUserInfo, 
         getLanguage, 
         getTemplate, 
         makeDefault, 
         makePurple,
         makeGreen,
         makeBlue,
         makePink
} from "../../helpers";
import { Actions } from "react-native-router-flux";
import { store } from "../../store";
import { USER_CHANGED, LANGUAGE, CURRENT_LANGUAGE_STRING, TEMP_LANGUAGE_CHANGED, TEMP_LANG_NAME_CHANGED, TEMPLATE_NAME_CHANGED, TEMPORAL_TEMPLATE_CHANGED } from "../../reducers/Types";
import { EUserRole, ELanguageType, ETemplate } from '../../enums';
import { IUser } from '../../interfaces';
import { Color } from '../../styles/Colors';

/**
 * Initial function for this application
 * Sessions control making here
 * Language control making here
 * Notification directors making here
 */
export const initial = async () => {
    let user;
    const dispatch = store.dispatch;
    await templateDetactor();
    await languageDetactor();
    setTimeout(() => Actions.home(), 1000); // 1 second delay
    try{
        user = await getUserInfo();
        //console.log(user);
        if(!user){
            user = await saveAnonymousUser();
            
        }
        dispatch({type: USER_CHANGED, payload: user}); // Update user info from reducer
            APIHelper.setAccessToken(user.access_token); // Set token 
    }catch(err){
        //setTimeout(() => Actions.auth(), 1000); // 1 second delayfor nice shown
    }
    setTimeout(() => Actions.home(), 1000);
    
}

/**
 * Determine the language of application
 */
export const languageDetactor = async () => {
    const dispatch = store.dispatch;
    try{
        // Determine phone language
        let language = null;
        if (Platform.OS == 'ios')
            language = NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0];
        else
            language = NativeModules.I18nManager.localeIdentifier;
        // Read language data
        if(language == 'en_US') language = ELanguageType.EN;
        let saved_lang;
        try{
            saved_lang = await getLanguage();
        }catch(err){}
        if(saved_lang) language = saved_lang;
        let customData;
        if (language === ELanguageType.TR)
            customData = require(`../../assets/languages/tr.json`);
        else customData = require(`../../assets/languages/en.json`); 
        dispatch({ type: LANGUAGE, payload: customData });
        dispatch({type : CURRENT_LANGUAGE_STRING, language});
        dispatch({ type: TEMP_LANGUAGE_CHANGED, payload: customData});
        dispatch({type: TEMP_LANG_NAME_CHANGED, payload: language});
        return;
    }catch(err){ return }
}

/**
 * Determine the tempalte of application
 */
export const templateDetactor = async () => {
    const dispatch = store.dispatch;
    try{
       let template = await getTemplate();
       console.log('Template : ', template);
       if(!template){
            dispatch({type: TEMPLATE_NAME_CHANGED, payload: ETemplate.DEFAULT});
            dispatch({type: TEMPORAL_TEMPLATE_CHANGED, payload: ETemplate.DEFAULT});
        return;
       }
       switch(template){
           case ETemplate.DARK:
               break;
           case ETemplate.PURPLE:
                makePurple(Color);
                break;
            case ETemplate.GREEN:
                makeGreen(Color);
                break;
            case ETemplate.DEFAULT:
                makeDefault(Color);
                break;
            case ETemplate.BLUE:
                makeBlue(Color);
                break;
            case ETemplate.PINK:
                makePink(Color);
                break;
            default:
                makeDefault(Color);
                break;
       }
       dispatch({type: TEMPLATE_NAME_CHANGED, payload: template});
       dispatch({type: TEMPORAL_TEMPLATE_CHANGED, payload: template});
       return;
    }catch(err){
        dispatch({type: TEMPLATE_NAME_CHANGED, payload: ETemplate.DEFAULT});
        dispatch({type: TEMPORAL_TEMPLATE_CHANGED, payload: ETemplate.DEFAULT});
        return;
    }
}

/**
 * Take anonymous user token from api and update user
 */
export const saveAnonymousUser = async () => {
    // TODO: apiden anonim token al
    const user: IUser = {
        id: 0,
        full_name: 'Anonim Kullanıcı',
        access_token: 'Anonim access Token',
        profile_image: 'https://randomuser.me/api/portraits/men/60.jpg',
        role: EUserRole.ANONYMOUS,
        email: 'test@test.com'
    }
    try{
        await saveUserInfo(user);
    }catch(err){
        
    }
    return user;
}



