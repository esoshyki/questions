import { State } from "../../types";

const questions = (state: State) => state.questions.questions;
const sections = (state: State) => state.questions.sections;
const loading = (state: State) => state.questions.loading;
const searchQuery = (state: State) => state.questions.searchQuery;

export const questionsSelect = {
    questions,
    sections,
    loading,
    searchQuery
}