import { Question, RAction, Section } from "../../types";

export enum QuestionsActions {
    SetSections = "Questions/Set-Sections",
    SetQuestions = "Questions/Set-Questions",
    SetLoading = "Questions/SetLoading",
    SetSearchQuery = "Questions/Set-Search-Query",
    GetSectionsRequest = "Questions/Get-Sections-Request",
    GetQuestionsRequest = "Questions/Get-Questions-Request",
    SearchRequest = "Questions/Search-Request",
};

export const setSections = (payload: Section[]) : RAction => ({
    type: QuestionsActions.SetSections,
    payload
})

export const setQuestions = (payload: Question[]) : RAction => ({
    type: QuestionsActions.SetQuestions,
    payload
})

export const setLoading = (payload: boolean) : RAction => ({
    type: QuestionsActions.SetLoading,
    payload
})

export const setSearchQuery = (payload: string) : RAction => ({
    type: QuestionsActions.SetSearchQuery,
    payload
})

export const getSections = (sessionId: string) : RAction => ({
    type: QuestionsActions.GetSectionsRequest,
    payload: sessionId
})

export const getQuestions = (sessionId: string) : RAction => ({
    type: QuestionsActions.GetQuestionsRequest,
    payload: sessionId
})

export const searchQuestions = (query: string, sessionId: string) : RAction => ({
    type: QuestionsActions.SearchRequest,
    payload: {
        query,
        sessionId
    }
})