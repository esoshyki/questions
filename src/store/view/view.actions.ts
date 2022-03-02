import { RAction } from "../../types";

export enum ViewActions {
    ToggleLoading = "View/Toggle-Loading",
    SetResize = "View/Set-Resize"
};

export const toggleLoading = () : RAction => ({
    type: ViewActions.ToggleLoading
})

export const setResize = (payload: boolean) : RAction => ({
    type: ViewActions.SetResize,
    payload
})