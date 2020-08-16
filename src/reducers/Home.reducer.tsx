import {
    HOME_LOADING,
    HOME_INIT_DATA_CHANGED,
    HOME_DATA_CHANGED,
    HOME_SEARCH_ONCHANGE
} from "./Types";


const INITIAL_STATE = {
    loading: false,
    init_data: null,
    data: null,
    search: '',
    num_of_get_data: 0
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case HOME_LOADING:
            return { ...state, loading: action.payload };
        case HOME_INIT_DATA_CHANGED:
            return { ...state, init_data: action.payload };
        case HOME_DATA_CHANGED:
            return { ...state, data: action.payload };
        case HOME_SEARCH_ONCHANGE:
            return { ...state, search: action.payload };
        default:
            return state;
    }
};


