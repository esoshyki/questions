import { createContext } from "react"
import { AddQuestionValue, LoadingValue, ResizeValue, SearchValue } from "./types";

export const LoadingContext = createContext<LoadingValue>({
    value: false,
    setValue: (value: boolean) => {}
});

export const ResizeContext = createContext<ResizeValue>({
    value: false,
    setValue: (value: boolean) => {}
});

export const SearchContext = createContext<SearchValue>({
    value: "",
    visible: false,
    setValue: (value: string) => {},
    setVisible: (value: boolean) => {}
});

export const AddQuestionContext = createContext<AddQuestionValue>({
    value: false,
    setValue: (value: boolean) => {}
})

