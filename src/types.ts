export type RAction = {
    payload?: any,
    type: string;
}

export type ViewState = {
    loading: boolean;
    resize: boolean;
}

export type Question = {
    ID: number,
    IBLOCK_SECTION_ID: number,
    NAME: string;
    DETAIL_TEXT: string;
    DETAIL_TYPE: string;  
}

export type NewQuestion = {
    QUESTION: string;
    PERSONAL: boolean;
}

export type Section = {
    ID: number;
    NAME: string;
}

export type QuestionsState = {
    sections: Section[];
    questions: Question[];
    loading: boolean;
    searchQuery: string;
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

export enum ApiActions {
    Questions = "getListFaq",
    Sections = "getSections",
    NewQuestion = "newQuestion",
    Search = "search"
}

// // // // // // // 
export enum Categories {
    jobInCompany = "Работа в компании",
    docs = "Работа с документами"
}

export const categories = {
    jobInCompany: Categories.jobInCompany,
    docs: Categories.docs
}