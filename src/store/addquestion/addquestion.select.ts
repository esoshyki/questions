import { State } from "../../types";

const show = (state: State) => state.addQuestion.show;
const questionsText = (state: State) => state.addQuestion.data.QUESTION;
const questionPersonal = (state: State) => state.addQuestion.data.PERSONAL;
const result = (state: State) => state.addQuestion.result;
const loading = (state: State) => state.addQuestion.loading;

export const addQuestionSelectors = {
    show,
    questionsText,
    questionPersonal,
    result,
    loading
}