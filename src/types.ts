import { ReactNode } from "react";

export type RAction = {
    payload?: any,
    type: string;
}

export type ViewState = {
    loading: boolean;
    resize: boolean;
    height: number;
    sound: boolean;
}

export type Question = {
    ID: number,
    IBLOCK_SECTION_ID: number,
    NAME: string;
    DETAIL_TEXT: string;
    DETAIL_TYPE: string;  
};

export type CategoryQuestions = {
    questions: Question[],
    page: number;
    pages: number;
}

export type NewQuestion = {
    QUESTION: string;
    PERSONAL: boolean;
}

export type SectionSort = {
    ID: number;
    NAME: string;
}

export type Section = {
    ID: number;
    NAME: string;
    questions: Question[];
    page: number;
    pages: number;
}

export type QuestionsState = {
    sections: Section[];
    loading: boolean;
    searchQuery: string;
    selectedSection: Section | null;
    size: number;
    found: Question[];
    isFound: boolean;
    loaded: boolean;
};

export type AddQuestionState = {
    show: boolean;
    data: NewQuestion,
    result: string;
    loading: boolean;
};

export type State = {
    questions: QuestionsState,
    view: ViewState,
    addQuestion: AddQuestionState
}

export type BitrixResponse = {
    data?: any;
    errors: string[];
    status: string;
}

// PAYLOADS

export type GetQuestionsPayload = {
    sessionId: string;
    selectedSection: Section,
    size: number;
    q?: string;
}

export enum ApiActions {
    Questions = "getQuestions",
    Sections = "getSections",
    NewQuestion = "newQuestion",
    Search = "search",
    GetPageSections = "getPageSections",
    GetSectionQuestion = "GetSectionQuestion",
}

// // // // // // // 
export enum Categories {
    jobInCompany = "Работа в компании",
    docs = "Работа с документами"
}

export const categories = {
    jobInCompany: Categories.jobInCompany,
    docs: Categories.docs
};

export interface HOC {
    children: ReactNode
}
