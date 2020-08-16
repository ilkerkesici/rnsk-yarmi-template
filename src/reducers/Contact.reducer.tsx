import {
    CONTACT_LOADING,
    CONTACT_DATA_CHANGED,
    CONTACT_SEARCH_ONCHANGED,
    CONTACT_MENU_REF_CHANGED,
    CONTACT_IOS_MENU_REF_CHANGED,
    CONTACT_CREATE_CHANNEL_MODAL

} from "./Types";
import { IContactDataProps } from "../interfaces";
import { EContactType } from "../enums";

const contact_data: IContactDataProps[] = [
    {
        Id: 10,
        Email: 'ilkerrkesici@gmail.com',
        ProfileImage: 'https://randomuser.me/api/portraits/men/60.jpg',
        FullName: 'İlker Kesici',
        About: ' Bir Zeybek gibi... ',
        Type: EContactType.INDIVIDUAL
    },
    {
        Id: 10,
        Email: ' - ',
        ProfileImage: 'https://randomuser.me/api/portraits/men/60.jpg',
        FullName: 'HalıSaha',
        About: 'Hsydin maça',
        Type: EContactType.TEAM,
        CreatorId: 0
    }
];

const INITIAL_STATE = {
    loading: false,
    data: contact_data,
    search: '',
    android_menu_ref: null,
    ios_menu_ref: null,
    create_channel_visible: false,
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CONTACT_LOADING:
            return { ...state, loading: action.payload };
        case CONTACT_DATA_CHANGED:
            return { ...state, data: action.payload };
        case CONTACT_SEARCH_ONCHANGED:
            return { ...state, search: action.payload };
        case CONTACT_MENU_REF_CHANGED:
            return { ...state, android_menu_ref: action.payload };
        case CONTACT_IOS_MENU_REF_CHANGED:
            return { ...state, ios_menu_ref: action.payload };
        case CONTACT_CREATE_CHANNEL_MODAL:
            return { ...state, create_channel_visible: action.payload };
        default:
            return state;
    }
};




