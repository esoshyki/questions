import { RAction } from "../../types";

export enum ViewActions {
    ToggleLoading = "View/Toggle-Loading",
    SetResize = "View/Set-Resize",
    SetHeight = "View/Set-Height",
    SetSound = "View/Set-Sound"
};

export const toggleLoading = () : RAction => ({
    type: ViewActions.ToggleLoading
})

export const setResize = (payload: boolean) : RAction => ({
    type: ViewActions.SetResize,
    payload
})

export const setHeight = (payload: number) : RAction => ({
    type: ViewActions.SetHeight,
    payload
})

export const setSound = (payload: boolean) : RAction => ({
    type: ViewActions.SetSound,
    payload
})