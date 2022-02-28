import { useContext, useState } from "react";
import styled from "styled-components";
import Icon from '../../assets/plus.png'
import { AddQuestionContext } from "../../contexts";
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

    const [question, setQuestion] = useState<BitrixNewQuestion>({
        DETAIL_TEXT: "",
        NAME: ""
    });
    const [errors, setErrors] = useState<any[]>([]);

    const onClick = () => {
        addQuestionCTX.setValue(false);
    }

    const send = async () => {
        console.log('send');
        const sessId = window.bxConfig?.sessid || "e14e316cb5cbcae4320a834ebb234f56";
        const response = await api.newQuestion(sessId, { 
            DETAIL_TEXT: question.DETAIL_TEXT,
            NAME: question.NAME
        });

        console.log(response.data);

        if (response.data) {
            addQuestionCTX.setValue(false);
        } 
        if (response.errors) {
            setErrors(response.errors)
        };

    }

    const toggle = () => {
        setQuestion({
            ...question,
            USER_ID: question.USER_ID ? undefined : window.bxConfig?.sessid || "TESTid"
        })
    }

    return (
        <AddQuestionWrapper visible={addQuestionCTX.value} className={errors.length ? "errors" : ""}>

            <CloseIcon onClick={onClick}/>

            <AddQuestionContent>
                <AddQuestionTitle>
                    {content.addQuestion.makeQuestion}
                </AddQuestionTitle>

                <AddQuestionLabel>
                    {content.addQuestion.name}
                </AddQuestionLabel>

                <AddQuestionName 
                    value={question.NAME}
                    onChange={e => setQuestion({
                        ...question,
                        NAME: e.target.value
                    })}
                    />

                <AddQuestionLabel>
                    {content.addQuestion.question}
                </AddQuestionLabel>

                <AddQuestionTextArea 
                    value={question.DETAIL_TEXT} 
                    onChange={e => setQuestion({
                        ...question,
                        DETAIL_TEXT: e.target.value
                    })}/>

                <Button 
                    style={{position: "relative"}}
                    onClick={send}
                    >
                    {content.addQuestion.send}
                </Button>

                <CheckBox checked={Boolean(question.USER_ID)} toggle={toggle}/>
                
            </AddQuestionContent>

        </AddQuestionWrapper>
    )
};

export default AddQuestion;