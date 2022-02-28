import React, { useContext, useState, MouseEvent } from "react";
import styled from "styled-components";
import { api } from "./api/api";
import CategoriesElement from "./components/Categories/Categories";
import Header from "./components/Layout/Header";
import Loading from "./components/Loading";
import { LoadingContext, SearchContext } from "./contexts";
import { BitrixQuestion, BitrixSection } from './types';

declare global {
    interface Window {
      bxConfig: { sessid: string; };
    }
};

const AppWrapper = styled.div<{
    bitrix: boolean
}>`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    height: ${props => props.bitrix ? "100%" : "100vh"};
    * {
        box-sizing: border-box;
    };
    position: relative;
    overflow-x: hidden;
`;

const Questions = () => {

    const [questions, setQuestions] = useState<BitrixQuestion[]>([]);
    const [sections, setSections] = useState<BitrixSection[]>([]);
    const [once, setOnce] = useState(false);
    const loadingCTX = useContext(LoadingContext);
    const searchCTX = useContext(SearchContext);

    React.useEffect(() => {

        if (!once) {

            const sessId = window.bxConfig?.sessid || "e14e316cb5cbcae4320a834ebb234f56";

            const getQuestions = async () => {
                const newSections = await api.getSections(sessId);
                setSections(newSections);

                const newQuestion = await api.getQuestions(sessId);
                setQuestions(newQuestion)
                loadingCTX.setValue(false);
            }

            loadingCTX.setValue(true);
            getQuestions();
            setOnce(true);
        }

    }, [loadingCTX, once]);

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as Element;
        if (!target.classList.contains("search-input") 
            && !searchCTX.value
            && !target.classList.contains("search-button")
            ) {
            searchCTX.setVisible(false)
        }
    };

    return (
        <AppWrapper bitrix={!!window.bxConfig?.sessid} onClick={e => onClick(e)}>
            <Header />
            {loadingCTX.value && <Loading />}
            <CategoriesElement questions={questions} sections={sections}/> 
        </AppWrapper>
    )
};

export default Questions;