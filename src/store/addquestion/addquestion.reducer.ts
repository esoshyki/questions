import { AddQuestionState, RAction } from "../../types";
import { AddQuestionActions } from "./addquestion.actions";

const init: AddQuestionState = {
    show: false,
    data: {
        QUESTION: "",
        PERSONAL: false
    },
    result: "",
    loading: false
};

export const addQuestionReducer = (state = init, action: RAction) : AddQuestionState => {

    const { payload, type } = action;

    switch (type) {

        case AddQuestionActions.SetQuestionText:
            return {
                ...state,
                data: {
                    QUESTION: payload,
                    PERSONAL: state.data.PERSONAL
                }
            }

        case AddQuestionActions.ToggleQuestionPersonal:
            return {
                ...state,
                data: {
                    QUESTION: state.data.QUESTION,
                    PERSONAL: !state.data.PERSONAL
                }
            }

        case AddQuestionActions.SetShow:
            return {
                ...state,
                show: payload
            }

        case AddQuestionActions.SetResult:
            return {
                ...state,
                result: payload
            }

        case AddQuestionActions.SetLoading:
            return {
                ...state,
                loading: payload
            }

        default:
            return state
    }
}