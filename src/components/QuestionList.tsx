import React, { useContext, Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { LoadingContext } from '../contexts';
import { Question } from '../types';
import Loading from './Loading';
import QuestionItem from './Question';

const QuestionListWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const QuestionListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:  flex-start;
    width: 100%;
`;

const Questiontitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
`

interface QuestionListProps {
    questions: Question[]
}

const QuestionList = ({questions} : QuestionListProps) => {

    const loadingCtx = useContext(LoadingContext);

   
    return (
        <QuestionListWrapper>
            {loadingCtx.value && <Loading />}

            <QuestionListContainer>
                {questions.map((question, id) => {
                    return (
                        <Fragment key={id}>
                            <QuestionItem question={question}/>
                        </Fragment>
                    )
                })}
            </QuestionListContainer>

        </QuestionListWrapper>
    )
};

export default QuestionList;