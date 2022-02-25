import React, { useState } from "react";
import styled from "styled-components";
import { ResizeContext } from "../../contexts";
import { theme } from "../../theme";
import { Categories, Question } from "../../types";
import Accordion from "../Accordion";
import QuestionList from "../QuestionList";

const CategoryWrapper = styled.div`
    position: relative;
    width: 100%;
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
                <Accordion
                    headerText={category}
                    backgroundColor={theme.colors.headerBackgroundCategory}
                    color={"#fff"}
                    parent={true}
                    >
                    <QuestionList questions={questions}/>
                </Accordion>
            </ResizeContext.Provider>
        </CategoryWrapper>
    )
};

export default Category;