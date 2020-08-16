/*
* Exporting our reducers for store
*/

import { combineReducers } from "redux";
import LoginReducer from './Login.reducer';
import RegisterReducer from './Register.reducer';
import ToastReducer from './Toast.reducer';
import UserInfoReducer from './UserInfo.reducer';
import AppLanguageReducer from './AppLanguage.reducer';
import HomeReducer from './Home.reducer';
import TemplateReducer from './Template.reducer';
import ContactReducer from './Contact.reducer';
import ChannelReducer from './Channel.reducer';

export default combineReducers({
    LoginResponse: LoginReducer,
    RegisterResponse: RegisterReducer,
    ToastResponse: ToastReducer,
    UserInfoResponse: UserInfoReducer,
    AppLanguageResponse: AppLanguageReducer,
    HomeResponse: HomeReducer,
    TemplateResponse: TemplateReducer,
    ContactResponse: ContactReducer,
    ChannelResponse: ChannelReducer
});
