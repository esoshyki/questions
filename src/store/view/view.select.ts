import { State } from "../../types";

const loading = (state: State) => state.view.loading;
const resize = (state: State) => state.view.resize;
const height = (state: State) => state.view.height;
const sound = (state: State) => state.view.sound

export const viewSelector = {
    loading,
    resize,
    height,
    sound
};