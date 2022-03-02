import { combineReducers } from "redux";
import { addQuestionReducer } from "./addquestion/addquestion.reducer";
import { questionReducer } from "./questions/questions.reducer";
import { viewReducer } from "./view/view.reducer";

export const rootReducer = combineReducers({
    view: viewReducer,
    questions: questionReducer,
    addQuestion: addQuestionReducer
})