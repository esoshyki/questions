import React from "react";
import { BitrixQuestion } from "../types";
import Accordion from "./Accordion";
import styled from 'styled-components'
import { theme } from "../theme";

interface QuestionItemProps {
    question: BitrixQuestion;
};

const Content = styled.p`
    margin: 0;
`;

const QuestionItem = ({ question } : QuestionItemProps) => {

    return (
        <Accordion 
            headerText={question.NAME}
            backgroundColor={theme.colors.gray}
            color={"#000"}
            >
            <Content dangerouslySetInnerHTML={{__html : question.DETAIL_TEXT || ""}}>

            </Content>
        </Accordion>
    )
}

export default QuestionItem;