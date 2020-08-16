import { IHomeData } from "interfaces";
import { NativeScrollEvent } from "react-native";
import { store } from "store";
import { HOME_LOADING, HOME_INIT_DATA_CHANGED, HOME_DATA_CHANGED, HOME_SEARCH_ONCHANGE } from "reducers/Types";

/**
 * Share the given data
 * @param data is home data that wiil  shared
 */
export const shareActivity = (data: IHomeData) => {

}

/**
 * Delete an activity if the user create
 * @param data is home data that will deleted
 */
export const deleteActivity = async (data: IHomeData) => {
    try{
        return true;
    }catch(err){
        return false
    }
}

/**
 * Determine is scrollview reach the end
 * @param param0 is a nativeEvent
 */
export const isEndReached = ({layoutMeasurement , contentOffset, contentSize}: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  /**
   * Fetch the data according to given input
   * @param search_input is searched input
   * @param page is page number of pagination
   * @param is_first controller for first fetch
   */
export const getData = async (search_input: string, page: number, is_first: boolean) => {
    const dispatch = store.dispatch;
    let num_of_get_data = store.getState().HomeResponse.num_of_get_data;
    is_first && num_of_get_data == 0 ? dispatch({type: HOME_LOADING, payload: true}) : null
    try{
        //TODO: API fetch

        store.getState().HomeResponse.num_of_get_data += 1; // Because of not get the data in useeffect home.tsx

        if(page == 0 || is_first){
            dispatch({type: HOME_INIT_DATA_CHANGED, payload: SAMPLE_DATA})
        }
        dispatch({type: HOME_DATA_CHANGED, payload: SAMPLE_DATA});
    }catch(err){

    }
    setTimeout(() => is_first && num_of_get_data == 0 ? dispatch({type: HOME_LOADING, payload: false}) : null, 1000);
    return true;

}

/**
 * update search input if not wait a response from API
 * @param search_input is search input from user
 */
export const searchStringOnChange = (search_input: string) => {
    console.log(search_input);
    store.dispatch({type: HOME_SEARCH_ONCHANGE, payload: search_input});
}

const SAMPLE_DATA: IHomeData[] = [
    {
        Id: 1,
        Date: new Date(),
        MeetType: 'CHANNEL',
        MeetWith: {
            Id: 1,
            Fullname: 'Delta',
            ProifleImage: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        Invite: 'https://www.google.com.tr/',
        Title: 'Toplantı',
        PublisherId: 2,
        Content: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
        Id: 2,
        Date: new Date(),
        MeetType: 'INDIVIDUAL',
        MeetWith: {
            Id: 1,
            Fullname: 'Ecesu Olgun',
            ProifleImage: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        PublisherId: 2,
        Title: 'Buluşma',
        Content: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using."
    },
    {
        Id: 4,
        Date: new Date(),
        MeetType: 'CHANNEL',
        PublisherId: 2,
        MeetWith: {
            Id: 1,
            Fullname: '90Pixel',
            ProifleImage: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        Invite: 'https://www.google.com.tr/',
        Title: 'Toplantı',
        Content: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        Id: 5,
        Date: new Date(),
        MeetType: 'CHANNEL',
        MeetWith: {
            Id: 1,
            Fullname: 'İlker Kesici',
            ProifleImage: 'https://randomuser.me/api/portraits/men/60.jpg'
        },
        Title: 'Toplantı',
        PublisherId: 2,
        Content: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
]