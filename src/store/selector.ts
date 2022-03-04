import { addQuestionSelectors } from './addquestion/addquestion.select'
import { questionsSelect } from './questions/questions.select'
import { viewSelector } from './view/view.select'

export const select = {
    view: viewSelector,
    questions: questionsSelect,
    addQuestion: addQuestionSelectors,
}
