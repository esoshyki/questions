import { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import Icon from '../../assets/plus.png'
import { AddQuestionContext, LoadingContext } from "../../contexts";
import { AddQuestionTextArea } from "./AddQuestionTextArea";
import { theme } from "../../theme";
import CheckBox from "./CheckBox";
import { AddQuestionTitle } from "./AddQuestionTitle";
import { BitrixNewQuestion } from "../../types";
import { api } from "../../api/api";
import { content } from "../../content";
import { AddQuestionName } from "./AddQuestionName";
import { AddQuestionLabel } from "./AddQuestionLabel";

const AddQuestionWrapper = styled.div<{
    visible: boolean
}>`
    top: 0;
    width: 100%;
    height: 100%;
    min-height: 800px;
    position: absolute;
    z-index: 10;
    background-color: ${props => props.visible ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};
    left: ${props => props.visible ? 0 : "100%"};
    transition: background-color 500ms ease-in, left 100ms ease-in 500ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background-image: url(${Icon});
    background-size: cover;
    filter: invert(1);
    transform: rotate(45deg);
    transition: transform 200ms;
    &:hover {
        cursor: pointer;
        transform: scale(1.05) rotate(45deg);
    }
`;

const AddQuestionContent = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
`;

const Button = styled.button`
    background-color: ${theme.colors.pageHeaderBackground};
    position: absolute;
    right: 20px;
    color: #fff;
    border: none;
    padding: 10px;
    transition: filter 200ms ease-in, transform 200ms ease-in;
    font-family: ${theme.fonts.main};
    align-self: flex-end;
    user-select: none;
    margin-top: 10px;
    &:hover {
        cursor: pointer;
        filter: hue-rotate(15deg);
    }
    &:focus {
        transform: scale(0.95)
    }
`

const AddQuestion = () => {

    const addQuestionCTX = useContext(AddQuestionContext);
    const loadingCTX = useContext(LoadingContext);

    const [question, setQuestion] = useState<BitrixNewQuestion>({
        QUESTION: "",
        PERSONAL: false
    });
    const [errors, setErrors] = useState<any[]>([]);
    const [textError, setTextError] = useState("");

    const onClick = () => {
        addQuestionCTX.setValue(false);
    }

    const send = async () => {
        if (!question.QUESTION) {
            return setTextError(content.addQuestion.errors.text)
        };

        loadingCTX.setValue(true);
        const sessid = window.faqConfig?.sessionId || "e14e316cb5cbcae4320a834ebb234f56";
        const response = await api.newQuestion(sessid, question);

        if (response.data) {
            addQuestionCTX.setValue(false);
        } 
        if (response.errors) {
            setErrors(response.errors)
        };

        loadingCTX.setValue(false);
    }

    const toggle = () => {
        setQuestion({
            ...question,
            PERSONAL: question.PERSONAL ? false : true
        })
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextError("");
        setQuestion({
            ...question,
            QUESTION: e.target.value
        });
    };

    return (
        <AddQuestionWrapper visible={addQuestionCTX.value} className={errors.length ? "errors" : ""}>

            <CloseIcon onClick={onClick}/>

            <AddQuestionContent>
                <AddQuestionTitle>
                    {content.addQuestion.makeQuestion}
                </AddQuestionTitle>

                <AddQuestionLabel error={!!textError}>
                    {content.addQuestion.question}
                </AddQuestionLabel>

                <AddQuestionTextArea 
                    error={!!textError}
                    value={textError ? textError : question.QUESTION} 
                    onChange={onChangeText}
                    onFocus={() => setTextError("")}
                    />

                <Button 
                    style={{position: "relative"}}
                    onClick={send}
                    >
                    {content.addQuestion.send}
                </Button>

                <CheckBox checked={question.PERSONAL} toggle={toggle}/>
                
            </AddQuestionContent>

        </AddQuestionWrapper>
    )
};

export default AddQuestion;