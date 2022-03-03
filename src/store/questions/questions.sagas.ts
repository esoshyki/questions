import { put, select, takeEvery } from "redux-saga/effects";
import { api } from "../../api/api";
import { GetQuestionsPayload, Question, RAction, Section, State } from "../../types";
import { QuestionsActions, setLoading, setFound, setSections, updateSection } from "./questions.action";

function* getSectionsWorker (action: RAction) {
    yield put(setLoading(true));
    const sections: Section[] = yield api.getSections(action.payload);
    yield put(setSections(sections));
    yield put(setLoading(false))
};

function* getQuestionsWorker (action: RAction) {
    const payload: GetQuestionsPayload = action.payload;
    yield put(setLoading(true));
    const questions: Question[] = payload.selectedSection.questions;
    const section: Section = yield api.getQuestions(action.payload);
    section.questions = [...questions, ...section.questions];
    yield put(updateSection(section));
    yield put(setLoading(false));
};

function* searchQuestionWorker (action: RAction) {
    const state: State = yield select();
    const searchQuery = state.questions.searchQuery;
    yield put(setLoading(true));
    const questions: Question[] = yield api.search(searchQuery, action.payload);
    yield put(setFound(questions));
    yield put(setLoading(false));
};

export default function* questionSagas () {
    yield takeEvery(QuestionsActions.GetSections, getSectionsWorker);
    yield takeEvery(QuestionsActions.GetQuestions, getQuestionsWorker);
    yield takeEvery(QuestionsActions.SearchQuestions, searchQuestionWorker);
}