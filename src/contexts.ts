import { createContext } from "react"
import { LoadingValue, ResizeValue, SearchValue } from "./types";

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
    setValue: (value: string) => {}
})

