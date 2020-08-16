import AsyncStorage from '@react-native-community/async-storage';

/**
 * Save access token to phone
 * @param token is user access token
 */
export const saveUserInfo = async (user_info: IUserInfo) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user_info));
    } catch (e) {
      // saving error
      return null;
    }
  }

  /**
   * Getting user info from asyncstorage
   */
export const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('user')
      if(value !== null) {
        // value previously stored
        return JSON.parse(value);
      }
      return null;
    } catch(e) {
      // error reading value
      return null;
    }
}

/**
 * Delete user info from asyncstorage
 */
export const deleteUserInfo = async () => {
    try {
        await AsyncStorage.removeItem('user')
        return;
      } catch(e) {
        // error reading value
        return;
      }
}

/**
 * Save current language
 */
export const saveLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('lang', language);
    return;
  } catch(e) {
    // error reading value
    return;
  }
}

/**
 * Get language if it exist
 */
export const getLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('lang');
    if(value !== null) {
      // value previously stored
      return value;
    }
    return null;
  } catch(e) {
    // error reading value
    return null;
  }
}

/**
 * Save the template name to localstorage
 * @param template_name is name of template
 */
export const saveTemplate = async (template_name: string) => {
  try {
    await AsyncStorage.setItem('template', template_name);
    return;
  } catch(e) {
    // error reading value
    return;
  }
}

/**
 * Get the name of the app template (colors)
 */
export const getTemplate = async () => {
  try {
    const value = await AsyncStorage.getItem('template');
    if(value !== null) {
      // value previously stored
      return value;
    }
    return null;
  } catch(e) {
    // error reading value
    return null;
  }
}


  interface IUserInfo{
      access_token: string
  }