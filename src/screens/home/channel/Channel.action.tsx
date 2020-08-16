import { store } from "store"
import { CHANNEL_LOADING } from "reducers/Types";

/**
 * Add member to channel
 */
export const addUserToChannel = () => {
    // TODO : Add user to channel
}

/**
 * Get members of the channel
 * @param id is channel id
 */
export const getMembersOfChannel = (id: number) => {
    const dispatch = store.dispatch;
    dispatch({type: CHANNEL_LOADING, payload: true})
    //TODO: API rewuest
    setTimeout(() => dispatch({type: CHANNEL_LOADING, payload: false}), 1000)
}

/**
 * Leave from channel
 * @param id is channel id
 */
export const leaveFromChannel = (id: number) => {

}

/**
 * Delete a channel
 * @param id is channel id
 */
export const deleteChannel = (id: number) => {

}



