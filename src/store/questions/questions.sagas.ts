import { put, takeEvery } from "redux-saga/effects";
import { api } from "../../api/api";
import { Question, RAction, Section } from "../../types";
import { QuestionsActions, setLoading, setQuestions, setSections } from "./questions.action";

function* getSectionsWorker (action: RAction) {
    yield put(setLoading(true));
    const sections: Section[] = yield api.getSections(action.payload);
    yield put(setSections(sections));
    yield put(setLoading(false))
};

function* getQuestionsWorker (action: RAction) {
    yield put(setLoading(true));
    const questions: Question[] = yield api.getQuestions(action.payload);
    yield put(setQuestions(questions));
    yield put(setLoading(false))
};

function* searchQuestionWorker (action: RAction) {
    const { sessionId, query } = action.payload;
    yield put(setLoading(true));
    const questions: Question[] = yield api.search(query, sessionId);
    yield put(setQuestions(questions));
    yield put(setLoading(false));
}

export default function* questionSagas () {
    yield takeEvery(QuestionsActions.GetSectionsRequest, getSectionsWorker);
    yield takeEvery(QuestionsActions.GetQuestionsRequest, getQuestionsWorker);
    yield takeEvery(QuestionsActions.SearchRequest, searchQuestionWorker);
}