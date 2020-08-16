import { store } from "../store";

/**
 * Get the month as string according to language
 * @param date is a date
 */
export const getLocalMonthOfDate =  (date: Date): string => {
    let month: string = '';
    let language = store.getState().AppLanguageResponse.currentLanguageString;
    switch(date.getMonth()){
        case 0:
            return language == 'tr_TR' ? 'Ocak' : 'January';
        case 1:
            return language == 'tr_TR' ? 'Şubat' : 'February';
        case 2:
            return language == 'tr_TR' ? 'Mart' : 'March';
        case 3:
            return language == 'tr_TR' ? 'Nisan' : 'April';
        case 4:
            return language == 'tr_TR' ? 'Mayıs' : 'May';
        case 5:
            return language == 'tr_TR' ? 'Haziran' : 'June';
        case 6:
            return language == 'tr_TR' ? 'Temmuz' : 'July';
        case 7:
            return language == 'tr_TR' ? 'Ağustos' : 'August';
        case 8:
            return language == 'tr_TR' ? 'Eylül' : 'September';
        case 9:
            return language == 'tr_TR' ? 'Ekim' : 'October';
        case 10:
            return language == 'tr_TR' ? 'Kasım' : 'November';
        case 11:
            return language == 'tr_TR' ? 'Aralık' : 'December';
    }
    return month;
}

/**
 * Get the time of a date as string
 * @param date is a date
 */
export const getTimeAsStringOfDate = (date: Date): string => {
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
    let hour = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
    return hour + ':' + minute;
}