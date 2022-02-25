import React from "react";
import { Question } from "../types";
import Accordion from "./Accordion";
import styled from 'styled-components'
import { theme } from "../theme";

interface QuestionItemProps {
    question: Question;
};

const Content = styled.p`
    
`;

const QuestionItem = ({ question } : QuestionItemProps) => {

    return (
        <Accordion 
            headerText={question.header}
            backgroundColor={theme.colors.headerBackground}
            color={"#fff"}
            >
            <Content>
                {question.body}
            </Content>
        </Accordion>
    )
}

export default QuestionItem;