import React, { useContext } from "react";
import styled from "styled-components";
import { api } from "./api/api";
import CategoriesElement from "./components/Categories/Categories";
import { LoadingContext } from "./contexts";
import { Question } from './types';

declare global {
    interface Window {
      bxConfig: { sessid: string; };
    }
};

const AppWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: 100%;
    * {
        box-sizing: border-box;
    };
`;

const Questions = () => {

    const [questions, setQuestions] = React.useState<Question[]>([]);
    const loadingCTX = useContext(LoadingContext);

    const getQuestions = async () => {
        const sessId = window.bxConfig?.sessid || "e14e316cb5cbcae4320a834ebb234f56";
        const newQuestion = await api.getQuestions(sessId);
        setQuestions(newQuestion)
        loadingCTX.setValue(false);
    }

    React.useEffect(() => {
        loadingCTX.setValue(true);
        getQuestions()
    }, [getQuestions, loadingCTX])

    return (
        <AppWrapper>
            <CategoriesElement questions={questions}/> 
        </AppWrapper>
    )
};

export default Questions;