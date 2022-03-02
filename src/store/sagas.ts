import { all } from "redux-saga/effects";
import addQuestionSagas from "./addquestion/addquestion.sagas";
import questionSagas from "./questions/questions.sagas";
import viewSagas from "./view/view.sagas";

export default function* sagas () {
    yield all([
        viewSagas(),
        questionSagas(),
        addQuestionSagas()
    ])
}