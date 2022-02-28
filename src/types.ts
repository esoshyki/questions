export enum Categories {
    jobInCompany = "Работа в компании",
    docs = "Работа с документами"
};

export const categories = {
    jobInCompany: Categories.jobInCompany,
    docs: Categories.docs
};

export type Question = {
    header: string;
    body: string;
    chapter: Categories;
};

export type BitrixQuestion = {
    ID: number,
    IBLOCK_SECTION_ID: number,
    NAME: string;
    DETAIL_TEXT: string;
    DETAIL_TYPE: string;
};

export type BitrixSection = {
    ID: number;
    NAME: string;
}

export type BitrixResponse = {
    data?: any;
    errors: string[];
    status: string;
}

export enum ApiActions {
    Questions = "getListFaq",
    Sections = "getSections"
}

export type IState = {
    loading: boolean,
  };
  
export interface LoadingValue {
    value: boolean,
    setValue: (value: boolean) => void;
}

export interface SearchValue {
    value: string;
    visible: boolean;
    setValue: (value: string) => void;
    setVisible: (value: boolean) => void;
}

export interface AddQuestionValue {
    value: boolean;
    setValue: (value: boolean) => void;
}

export type AddQuestionType = {
    text: string;
    id?: string;
}


export interface ResizeValue extends LoadingValue {}