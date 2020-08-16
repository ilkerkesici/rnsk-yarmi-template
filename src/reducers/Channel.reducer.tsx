import { IContactDataProps } from "../interfaces";
import { EContactType } from "../enums";
import { CHANNEL_LOADING, MEMBERS_CHANGED } from "./Types";

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
        Id: 11,
        Email: ' - ',
        ProfileImage: 'https://randomuser.me/api/portraits/men/60.jpg',
        FullName: 'Ecesu Olgun',
        About: 'İlkerin aşkı....',
        Type: EContactType.INDIVIDUAL,
    }
];

const INITIAL_STATE = {
    loading: false,
    data: contact_data,
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case CHANNEL_LOADING:
            return { ...state, loading: action.payload };
        case MEMBERS_CHANGED:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};