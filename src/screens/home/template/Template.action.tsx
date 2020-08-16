import { store } from "store"
import { TEMPLATE_NAME_CHANGED, TEMPORAL_TEMPLATE_CHANGED } from "reducers/Types";
import { getTemplate, saveTemplate } from "helpers";
import { ETemplate } from "enums";
import { Actions } from "react-native-router-flux";

/**
 * Change the temporal template
 * @param template template name
 */
export const changeTemplate = (template: string) => {
    store.dispatch({ type: TEMPORAL_TEMPLATE_CHANGED, payload: template});
}

/**
 * clear the temporal template if it different from current template
 */
export const fixTemplate = async () => {
    const dispatch = store.dispatch;
    //dispatch({ type: TEMPORAL_TEMPLATE_CHANGED, payload: null});
    try{
        let template = store.getState().TemplateResponse.template;
        console.log('Template : ', template);
        dispatch({ type: TEMPORAL_TEMPLATE_CHANGED, payload: template});
    }catch(err){
        dispatch({ type: TEMPORAL_TEMPLATE_CHANGED, payload: ETemplate.DEFAULT});
    }
}

/**
 * Save the new template
 */
export const saveChangedTemplate = async () => {
    let template = store.getState().TemplateResponse.temporal_temp;
    let actual_template = store.getState().TemplateResponse.template;
    if(template != actual_template){
        await saveTemplate(template);
        store.dispatch({type: TEMPLATE_NAME_CHANGED, payload: template});
    }
    else Actions.pop();
}