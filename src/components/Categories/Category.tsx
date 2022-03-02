import React from "react";
import styled from "styled-components";
import { Question } from "../../types";
import CategoryTitle from "../Layout/CategoryTitle";
import QuestionList from "../QuestionList";

const CategoryWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0;
`;

const Category = ({ questions, name } : { 
    questions: Question[];
    name: string
}) => {

    return (
        <CategoryWrapper>
            <CategoryTitle>
                {name}
            </CategoryTitle>
            <QuestionList questions={questions}/>
        </CategoryWrapper>
    )
};

export default Category;