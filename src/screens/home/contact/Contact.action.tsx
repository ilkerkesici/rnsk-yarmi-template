import { store } from "../../../store";
import { CONTACT_SEARCH_ONCHANGED, CONTACT_MENU_REF_CHANGED, CONTACT_IOS_MENU_REF_CHANGED, CONTACT_CREATE_CHANNEL_MODAL } from "../../../reducers/Types";
import { IContactDataProps } from "../../../interfaces";
import Menu from 'react-native-material-menu';
import { Platform } from "react-native";
import ActionSheet from 'react-native-actionsheet'
import { Actions } from "react-native-router-flux";

/**
 * update search input if not wait a response from API
 * @param search_input is search input from user
 */
export const searchStringOnChange = (search_input: string) => {
    console.log(search_input);
    store.dispatch({type: CONTACT_SEARCH_ONCHANGED, payload: search_input});
}

/**
 * Delete user from my contacts
 * @param data is contact data
 */
export const deleteContact = async (data: IContactDataProps) => {
    try{
        //TODO: API request
    }catch(err){

    }
    return;
}

/**
 * On android menu referance changed
 * @param ref is menü referance
 */
export const androidMenuRefChanged = (ref: Menu | null) => {
    store.dispatch({type: CONTACT_MENU_REF_CHANGED, payload: ref});
}

/**
 * Change the ios action sheet referance for contact call for every change menu referance
 * @param ref is action sheet referance for ios
 */
export const iosMenuRefChanged = (ref: ActionSheet | null | undefined) => {
    store.dispatch({type: CONTACT_IOS_MENU_REF_CHANGED, payload: ref});
}


/**
 * Open menu if it exist
 */
export const openMenu = () => {
    if(Platform.OS === 'android'){
        const menu: Menu | null = store.getState().ContactResponse.android_menu_ref;
        if(menu == null || !menu) return;
        menu.show();
        return;
    }
    const menu: ActionSheet | null | undefined = store.getState().ContactResponse.ios_menu_ref;
    if(!menu) return;
    menu.show();
    
}

/**
 * Determine button for actionsheet and redirect it
 * @param index is action sheet button indec
 */
export const redirectActionSheet = (index: number) => {
    switch(index){
        case 0:
            onPressAddFriend();
            break;
        case 1:
            onPressCreateChannelItem();
            break;
        default:
            break;
    }
}

/**
 * Hide menu if it exist
 */
export const hideMenu = () => {
    const menu: Menu | null = store.getState().ContactResponse.android_menu_ref;
    if(menu == null) return;
    menu.hide();
}

/**
 * On press the add friend menu item
 */
export const onPressAddFriend = () => {
    hideMenu();
    // TODO: Go to users screen
    Actions.users(); // Go to add contact screen
}

/**
 * On Press the create channel menu item
 */
export const onPressCreateChannelItem = () => {
    hideMenu();
    openCreateChannelModal();
    
}

/**
 * Open the create channel modal
 */
export const openCreateChannelModal = () => {
    store.dispatch({type: CONTACT_CREATE_CHANNEL_MODAL, payload: true});
}

/**
 * Close the create channel modal
 */
export const closeCreateChannelModal = () => {
    store.dispatch({type: CONTACT_CREATE_CHANNEL_MODAL, payload: false});
}