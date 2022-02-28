import React, { useContext, useState } from "react";
import styled from "styled-components";
import { api } from "./api/api";
import CategoriesElement from "./components/Categories/Categories";
import Header from "./components/Layout/Header";
import Loading from "./components/Loading";
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

    const [questions, setQuestions] = useState<Question[]>([]);
    const [once, setOnce] = useState(false);
    const loadingCTX = useContext(LoadingContext);

    React.useEffect(() => {

        if (!once) {

            const getQuestions = async () => {
                const sessId = window.bxConfig?.sessid || "e14e316cb5cbcae4320a834ebb234f56";
                const newQuestion = await api.getQuestions(sessId);
                setQuestions(newQuestion)
                loadingCTX.setValue(false);
            }
    
            loadingCTX.setValue(true);
            getQuestions();
            setOnce(true);
        }


    }, [loadingCTX, once])

    return (
        <AppWrapper>
            <Header />
            {loadingCTX.value && <Loading />}
            <CategoriesElement questions={questions}/> 
        </AppWrapper>
    )
};

export default Questions;