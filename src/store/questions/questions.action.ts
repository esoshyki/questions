import { GetQuestionsPayload, Question, RAction, Section } from "../../types";

export enum QuestionsActions {
    SetSections = "Questions/Set-Sections",
    UpdateSection = "Questions/Update-Section-Questions",
    SetLoading = "Questions/Set-Loading",
    GetSections = "Questions/Get-Sections",
    GetQuestions = "Questions/Get-Questions",
    SetSearchQuery = "Questions/Set-Search-Query",
    SearchQuestions = "Questions/Search-Questions",
    SetSelectedSection = "Questions/Set-Selected-Section",
    SetSize = "Questions/Set-Size"
}

export const setSections = (payload: Section[]) : RAction => ({
    type: QuestionsActions.SetSections,
    payload
})

export const setLoading = (payload: boolean) : RAction => ({
    type: QuestionsActions.SetLoading,
    payload
})

export const setSelectedSection = (sectionId: number | null) : RAction => ({
    type: QuestionsActions.SetSelectedSection,
    payload: sectionId
})

export const updateSection = (payload: Section) : RAction => ({
    type: QuestionsActions.UpdateSection,
    payload
})

export const getSections = (sessionId: string) : RAction => ({
    type: QuestionsActions.GetSections,
    payload: sessionId
})

export const getQuestions = (payload: GetQuestionsPayload) : RAction => ({
    type: QuestionsActions.GetQuestions,
    payload
})

export const setSearchQuery = (payload: string) : RAction => ({
    type: QuestionsActions.SetSearchQuery,
    payload
})

export const searchQuestions = (sessionId: string) : RAction => ({
    type: QuestionsActions.SearchQuestions,
    payload: sessionId
})

export const setSize = (size: number) : RAction => ({
    type: QuestionsActions.SetSize,
    payload: size
})

