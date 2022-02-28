import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { LoadingContext, SearchContext } from '../contexts';
import { theme } from '../theme';
import { Question } from '../types';
import Loading from './Loading';
import QuestionItem from './Question';

const QuestionListWrapper = styled.div`
    border-radius: 10px;
    border: 1px solid ${theme.colors.borderGray};
    overflow: hidden;
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

interface QuestionListProps {
    questions: Question[]
}

const QuestionList = ({questions} : QuestionListProps) => {

    const loadingCtx = useContext(LoadingContext);
    const searchCtx = useContext(SearchContext);

    const filter = searchCtx.value;

    const filteredQuestions = !filter ? questions : questions.filter(question => {
        return new RegExp(filter.toLowerCase()).test(question.header.toLowerCase()) || 
        new RegExp(filter.toLowerCase()).test(question.body.toLowerCase())
    })
   
    return (
        <QuestionListWrapper>
            {loadingCtx.value && <Loading />}

            <QuestionListContainer>
                {filteredQuestions.map((question, id) => {
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