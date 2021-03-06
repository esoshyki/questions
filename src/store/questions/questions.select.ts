import { State } from '../../types'

const sections = (state: State) => state.questions.sections
const loading = (state: State) => state.questions.loading
const searchQuery = (state: State) => state.questions.searchQuery
const selectedSection = (state: State) => state.questions.selectedSection
const size = (state: State) => state.questions.size
const found = (state: State) => state.questions.found
const isFound = (state: State) => state.questions.isFound
const loaded = (state: State) => state.questions.loaded

export const questionsSelect = {
    sections,
    loading,
    searchQuery,
    selectedSection,
    size,
    found,
    isFound,
    loaded
}
