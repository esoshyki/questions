import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Icon from '../../assets/plus.png'
import { AddQuestionTextArea } from "./AddQuestionTextArea";
import { theme } from "../../theme";
import CheckBox from "./CheckBox";
import { AddQuestionTitle } from "./AddQuestionTitle";
import { content } from "../../content";
import { AddQuestionLabel } from "./AddQuestionLabel";
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/selector";
import { addQuestionRequest, setQuestionText, setShowAddQuestion, toggleQuestionPersonal } from "../../store/addquestion/addquestion.actions";


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

    const dispatch = useDispatch();

    const QUESTION = useSelector(select.addQuestion.questionsText);
    const PERSONAL = useSelector(select.addQuestion.questionPersonal);
    const show = useSelector(select.addQuestion.show)

    const [textError, setTextError] = useState("");
    const [formErrors, setFormErrors] = useState(false);

    const onClick = () => {
        dispatch(setShowAddQuestion(false))
    }

    const send = async () => {
        const sessionId = window.faqConfig?.sessionId || "e14e316cb5cbcae4320a834ebb234f56";

        if (!QUESTION && formErrors) {
            return setTextError(content.addQuestion.errors.text)
        } else {
            dispatch(addQuestionRequest(sessionId, {
                QUESTION,
                PERSONAL
            }))
        }
        
    }

    const toggle = () => {
        dispatch(toggleQuestionPersonal());
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormErrors(false);
        dispatch(setQuestionText(e.target.value))
    };

   return (

      
        <AddQuestionWrapper visible={show} >

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
                    value={textError ? textError : QUESTION} 
                    onChange={onChangeText}
                    onFocus={() => setTextError("")}
                    />

                <Button 
                    style={{position: "relative"}}
                    onClick={send}
                    >
                    {content.addQuestion.send}
                </Button>

                <CheckBox checked={PERSONAL} toggle={toggle}/>
                
            </AddQuestionContent>

        </AddQuestionWrapper>
    )
};

export default AddQuestion;