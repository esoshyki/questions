import { QuestionsState, RAction } from "../../types";
import { QuestionsActions } from "./questions.action";

const init: QuestionsState = {
    sections: [],
    questions: [],
    loading: false,
    searchQuery: ""
};

export const questionReducer = (state = init, action: RAction) : QuestionsState => {
    const { payload, type } = action;

    switch (type) {

        case QuestionsActions.SetSections:
            return {
                ...state,
                sections: payload
            }

        case QuestionsActions.SetQuestions:
            return {
                ...state,
                questions: payload
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

        default:
            return state
    }
}