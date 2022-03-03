import React, { useEffect } from "react";
import Loading from "./components/Loading";
import AddQuestionResult from './components/AddQuestion/AddQuestionResult';
import { useDispatch, useSelector } from 'react-redux';
import { getSections } from "./store/questions/questions.action";
import { fakeSessionId } from "./api/instance";
import { select } from "./store/selector";
import Layout from "./components/Layout";
import Left from "./components/Layout/Left";
import Right from "./components/Layout/Right";
import Sections from "./components/Sections";
import Search from "./components/Search";
import Questions from "./components/Questions";


declare global {
    interface Window {
      faqConfig: { sessionId: string; };
    }
};



const App = () => {

    const sessionId = window.faqConfig?.sessionId || fakeSessionId;

    const dispatch = useDispatch();

    const result = useSelector(select.addQuestion.result);
    const loading = useSelector(select.questions.loading);

    useEffect(() => {
        dispatch(getSections(sessionId))
    }, [dispatch, sessionId]);


    return (
        <Layout >
            {loading && <Loading/>}
            <Left>
                <Questions />
            </Left>
            
            <Right>
                <Search />
                <Sections />
            </Right>
            {result && <AddQuestionResult />}

        </Layout>
    )
};

export default App;