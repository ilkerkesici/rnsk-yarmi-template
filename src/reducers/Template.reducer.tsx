import { TEMPLATE_NAME_CHANGED, TEMPORAL_TEMPLATE_CHANGED } from "./Types";


const INITIAL_STATE = {
    template: null,
    temporal_temp: null
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TEMPLATE_NAME_CHANGED:
            return { ...state, template: action.payload };
        case TEMPORAL_TEMPLATE_CHANGED:
            return { ...state, temporal_temp: action.payload };
        default:
            return state;
    }
};