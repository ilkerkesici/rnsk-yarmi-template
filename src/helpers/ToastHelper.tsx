import { showToast } from '../components/toast/Toast.action';
import { IToast } from '../interfaces';

export const TOAST_SUCCESS = 'toast_success';
export const TOAST_ERROR = 'toast_error';
export const TOAST_MESSAGE = 'toast_message';

/**
 * Show toast with given props
 * @param props is ToastProps
 */
export const showCutomToast = (props: IToast) => {
    showToast(props);
}