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
}

export type BitrixResponse = {
    data?: any;
    errors: string[];
    status: string;
}

export enum ApiActions {
    Questions = "getListFaq"
}

export type IState = {
    loading: boolean,
  };
  
export interface LoadingValue {
    value: boolean,
    setValue: (value: boolean) => void;
}

export interface SearchValue {
    value: string,
    setValue: (value: string) => void;
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