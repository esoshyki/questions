import React from "react";
import { Question } from "../../types";
import Accordion from "../Accordion";
import styled from 'styled-components'
import { theme } from "../../theme";

interface QuestionProps {
    question: Question;
};

const Content = styled.p`
    margin: 0;
`;

const QuestionElement = ({ question } : QuestionProps) => {

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

export default QuestionElement;