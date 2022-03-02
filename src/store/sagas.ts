import { all } from "redux-saga/effects";
import addquestionSagas from "./addquestion/addquestion.sagas";
import questionSagas from "./questions/questions.sagas";
import viewSagas from "./view/view.sagas";

export default function* () {
    yield all([
        viewSagas(),
        questionSagas(),
        addquestionSagas()
    ])
}