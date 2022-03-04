import { QuestionsState, RAction } from "../../types";
import { QuestionsActions } from "./questions.action";

const init: QuestionsState = {
    selectedSection: null,
    sections: [],
    loading: false,
    searchQuery: "",
    size: 10,
    found: [],
    isFound: false
};

export const questionReducer = (state = init, action: RAction) : QuestionsState => {
    const { payload, type } = action;

    switch (type) {

        case QuestionsActions.SetSections:
            return {
                ...state,
                sections: payload
            }

        case QuestionsActions.UpdateSection:
            return {
                ...state,
                selectedSection: payload
            }

        case QuestionsActions.SetLoading:
            return {
                ...state,
                loading: payload
            }
        
        case QuestionsActions.SetSearchQuery:
            return {
                ...state,
                searchQuery: payload
            }

        case QuestionsActions.SetSelectedSection:
            return {
                ...state,
                selectedSection: !payload ? payload : (state.sections.find(section => section.ID === payload) || null)
            }

        case QuestionsActions.SetSize:
            return {
                ...state,
                size: payload
            }

        case QuestionsActions.SetFound:
            return {
                ...state,
                found: payload
            }

        case QuestionsActions.SetIsFound:
            return {
                ...state,
                isFound: payload
            }

        default:
            return state
    }
}