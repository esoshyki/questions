import { AxiosResponse } from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { api } from "../../api/api";
import { BitrixResponse, RAction } from "../../types";
import { setAddQuestionResult } from "./addquestion.actions";
import { AddQuestionActions, setLoading } from "./addquestion.actions";

function* sendQuestionWorker (action: RAction) {
    const { sessionId, question } = action.payload;
    yield put(setLoading(true));
    const result: BitrixResponse = yield api.newQuestion(sessionId, question);

    console.log(result);
    const message = result.data ? "Вопрос отправлен" : (result.errors?.[0]) || "Ошибка сервера";
    yield put(setAddQuestionResult(message));
    yield put(setLoading(false))
}

export default function* addQuestionSagas() {
    yield takeEvery(AddQuestionActions.SendQuestion , sendQuestionWorker)
}