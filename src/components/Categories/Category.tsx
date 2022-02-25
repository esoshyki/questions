import React, { useState } from "react";
import styled from "styled-components";
import { ResizeContext } from "../../contexts";
import { Categories, Question } from "../../types";
import CategoryTitle from "../Layout/CategoryTitle";
import QuestionList from "../QuestionList";

const CategoryWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 10px 0;
`;

const Category = ({ questions, category } : { 
    questions: Question[];
    category: Categories

}) => {

    const [resize, setResize] = useState(false);

    return (
        <CategoryWrapper>
            <ResizeContext.Provider value={{
                value: resize,
                setValue: (value: boolean) => setResize(value) 
            }}>
                <CategoryTitle>
                    {category}
                </CategoryTitle>
                <QuestionList questions={questions}/>

            </ResizeContext.Provider>
        </CategoryWrapper>
    )
};

export default Category;