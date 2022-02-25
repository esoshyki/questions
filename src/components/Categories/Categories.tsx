import React, { Fragment } from "react";
import styled from "styled-components";
import { categories, Categories, Question } from "../../types";
import PageTitle from "../Layout/PageTitle";
import QuestionList from "../QuestionList";
import Category from "./Category";

const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

interface CategoriesProps {
    questions: Question[];
}

const CategoriesElement = ({ questions } : CategoriesProps) => {

    return (
        <CategoriesWrapper>
            <PageTitle>Вопросы</PageTitle>

            <Fragment>
                {
                    Object.entries(categories).map(([key, value]) => {
                        return (
                            <Fragment key={value}>
                                <Category 
                                questions={questions.filter(question => question.chapter === value)}
                                category={value}
                                />
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        </CategoriesWrapper>
    )
};

export default CategoriesElement;