import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../contexts';
import { theme } from '../theme';
import { BitrixQuestion } from '../types';
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
    questions: BitrixQuestion[]
}

const QuestionList = ({questions} : QuestionListProps) => {

    const searchCtx = useContext(SearchContext);

    const filter = searchCtx.value;

    const filteredQuestions = !filter ? questions : questions.filter(question => {
        return new RegExp(filter.toLowerCase()).test(question.NAME.toLowerCase()) || 
        new RegExp(filter.toLowerCase()).test(question.DETAIL_TEXT.toLowerCase())
    })
   
    return (
        <QuestionListWrapper>

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