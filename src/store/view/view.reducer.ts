import { RAction, ViewState } from "../../types";
import { ViewActions } from "./view.actions";

const init: ViewState = {
    loading: false,
    resize: false
};

export const viewReducer = (state = init, action: RAction) : ViewState => {
    const { payload, type } = action;

    switch (type) {

        case ViewActions.ToggleLoading:
            return {
                ...state,
                loading: !state.loading
            }

        case ViewActions.SetResize:
            return {
                ...state,
                resize: payload
            }

        default:
            return state
    }
}