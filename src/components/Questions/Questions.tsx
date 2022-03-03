import React, { Fragment, useEffect, useRef, WheelEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fakeSessionId } from '../../api/instance';
import { getQuestions, setSize } from '../../store/questions/questions.action';
import { select } from '../../store/selector';
import Question from './Question';
import QuestionList from './QuestionList';



const Title = styled.h2`
    font-weight: 900;
    text-align: start;
    width: calc(100% - 20px);
`;

const QuestionContainer = () => {

    const dispatch = useDispatch();

    const selectedSection = useSelector(select.questions.selectedSection);
    const loading = useSelector(select.questions.loading);
    const size = useSelector(select.questions.size);
    const height = useSelector(select.view.height);

    useEffect(() => {
        if (selectedSection) {
            const section = {
                ...selectedSection,
                page: selectedSection?.page || 1
            };
            dispatch(getQuestions({
                size,
                selectedSection: section,
                sessionId: window.faqConfig?.sessionId || fakeSessionId
            }));
        };
    }, [dispatch, selectedSection?.ID, size]);



    const loadNextPage = () => {
        if (!loading && selectedSection) {
            if (selectedSection.page < selectedSection.pages) {
                dispatch(getQuestions({
                    size,
                    selectedSection: {...selectedSection, page: selectedSection.page + 1},
                    sessionId: window.faqConfig?.sessionId || fakeSessionId
                }))
            };
        }
    }


    return (
        <Fragment>
                {selectedSection && <Title>{selectedSection.NAME}</Title>}
              
                {selectedSection && <QuestionList 
                    questions={selectedSection.questions}
                    loadNextPage={loadNextPage}
                    />}
        </Fragment>
    )
};

export default QuestionContainer;