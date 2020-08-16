import {
    LANGUAGE,
    CURRENT_LANGUAGE_STRING,
    TEMP_LANGUAGE_CHANGED,
    TEMP_LANG_NAME_CHANGED
} from './Types';

const INITIAL_STATE = {
    currentLanguage: null,
    currentLanguageString: null,
    temp_language: null,
    temp_language_string: null,
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case LANGUAGE:
            return { ...state, currentLanguage: action.payload };
        case CURRENT_LANGUAGE_STRING:
            return { ...state, currentLanguageString: action.payload };
        case TEMP_LANGUAGE_CHANGED:
            return { ...state, temp_language: action.payload };
        case TEMP_LANG_NAME_CHANGED:
            return { ...state, temp_language_string: action.payload };
        default:
            return state;
    }
};