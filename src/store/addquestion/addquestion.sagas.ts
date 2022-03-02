import { put, takeEvery } from "redux-saga/effects";
import { api } from "../../api/api";
import { RAction } from "../../types";
import { setAddQuestionResult } from "./addquestion.actions";
import { AddQuestionActions, setLoading } from "./addquestion.actions";

function* sendQuestionWorker (action: RAction) {
    const { sessionId, question } = action.payload;
    yield put(setLoading(true));
    const result: boolean = yield api.newQuestion(sessionId, question);
    yield put(setAddQuestionResult(result ? "Вопрос отправлен" : "Ошибка"));
    yield put(setLoading(false))
}

export default function* addQuestionSagas() {
    yield takeEvery(AddQuestionActions.SendQuestion , sendQuestionWorker)
}