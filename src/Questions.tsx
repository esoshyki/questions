import React, { useEffect } from "react";
import styled from "styled-components";
import CategoriesElement from "./components/Categories/Categories";
import Header from "./components/Layout/Header";
import Loading from "./components/Loading";
import AddQuestionResult from './components/AddQuestion/AddQuestionResult';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, getSections } from "./store/questions/questions.action";
import { fakeSessionId } from "./api/mockApi";
import { select } from "./store/selector";

declare global {
    interface Window {
      faqConfig: { sessionId: string; };
    }
};

const AppWrapper = styled.div<{
    bitrix: boolean
}>`
    width: 100%;
    max-width: 1000px;
    margin: 0 10px;
    height: ${props => props.bitrix ? "100%" : "100vh"};
    * {
        box-sizing: border-box;
    };
    position: relative;
    overflow-x: hidden;
`;

const Questions = () => {

    const sessionId = window.faqConfig?.sessionId || fakeSessionId;

    const dispatch = useDispatch();

    const sections = useSelector(select.questions.sections);
    const result = useSelector(select.addQuestion.result);
    const loading = useSelector(select.questions.loading);

    useEffect(() => {
        dispatch(getSections(sessionId))
    }, [dispatch, sessionId]);

    useEffect(() => {
        if (sections.length) {
            dispatch(getQuestions(sessionId))
        }
    }, [dispatch, sessionId, sections]);

    return (
        <AppWrapper bitrix={!!window.faqConfig?.sessionId} >
            <Header />
            {result && <AddQuestionResult />}
            {loading && <Loading />}
            <CategoriesElement /> 
        </AppWrapper>
    )
};

export default Questions;