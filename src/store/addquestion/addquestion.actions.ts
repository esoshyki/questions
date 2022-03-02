import { NewQuestion, RAction } from "../../types";

export enum AddQuestionActions {
    SetShow = "AddQuestion/Toggle-Show",
    SetQuestionText = "AddQuestion/Set-Question-Text",
    ToggleQuestionPersonal = "AddQuestion/Toggle-Question-Personal",
    SetResult = "AddQuestion/Set-Result",
    SendQuestion = "AddQuestion/Send-Question",
    SetLoading = "AddQuestion/Loading",
}

export const setShowAddQuestion = (payload: boolean) : RAction => ({
    type: AddQuestionActions.SetShow,
    payload
})

export const setQuestionText = (payload: string) : RAction => ({
    type: AddQuestionActions.SetQuestionText,
    payload
})

export const toggleQuestionPersonal = () : RAction => ({
    type: AddQuestionActions.ToggleQuestionPersonal,
})

export const setAddQuestionResult = (payload: string) : RAction => ({
    type: AddQuestionActions.SetResult,
    payload
})

export const addQuestionRequest = (sessionId: string, question: NewQuestion) : RAction => ({
    type: AddQuestionActions.SendQuestion,
    payload: {
        sessionId,
        question
    }
})

export const setLoading = (payload: boolean) : RAction => ({
    type: AddQuestionActions.SetLoading,
    payload
})
