import { createContext } from "react"
import { LoadingValue, ResizeValue } from "./types";

export const LoadingContext = createContext<LoadingValue>({
    value: false,
    setValue: (value: boolean) => {}
});

export const ResizeContext = createContext<ResizeValue>({
    value: false,
    setValue: (value: boolean) => {}
});

