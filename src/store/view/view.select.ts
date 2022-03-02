import { State } from "../../types";

const loading = (state: State) => state.view.loading;
const resize = (state: State) => state.view.resize;

export const viewSelector = {
    loading,
    resize
};