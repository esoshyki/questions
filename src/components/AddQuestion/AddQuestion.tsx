import { useContext, useState } from "react";
import styled from "styled-components";
import Icon from '../../assets/plus.png'
import { AddQuestionContext } from "../../contexts";
import { AddQuestionTextArea } from "./AddQuestionTextArea";
import { AddQuestionTitle } from "./AddQuestionTitle";
import { theme } from "../../theme";
import CheckBox from "./CheckBox";
import { AddQuestionType } from "../../types";

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

    const [question, setQuestion] = useState<AddQuestionType>({
        text: "",
    })

    const onClick = () => {
        addQuestionCTX.setValue(false);
    }

    const send = () => {
        console.log("send");
    }

    const toggle = () => {
        setQuestion({
            ...question,
            id: question.id ? undefined : window.bxConfig?.sessid || "TESTid"
        })
    }

    return (
        <AddQuestionWrapper visible={addQuestionCTX.value}>

            <CloseIcon onClick={onClick}/>

            <AddQuestionContent>
                <AddQuestionTitle>
                    Задать вопрос
                </AddQuestionTitle>

                <AddQuestionTextArea 
                    value={question.text} 
                    onChange={e => setQuestion({
                        ...question,
                        text: e.target.value
                    })}/>

                <Button 
                    style={{position: "relative"}}
                    onClick={send}
                    >
                    Отправить
                </Button>

                <CheckBox checked={Boolean(question.id)} toggle={toggle}/>
                
            </AddQuestionContent>

        </AddQuestionWrapper>
    )
};

export default AddQuestion;