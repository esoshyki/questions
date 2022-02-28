import { Fragment, useContext } from "react";
import styled from "styled-components";
import { AddQuestionContext } from "../../contexts";
import { theme } from "../../theme";
import AddQuestion from "./AddQuestion";


export const ButtonWrapper = styled.button`
    background-color: ${theme.colors.green};
    position: absolute;
    right: 20px;
    color: #fff;
    border: none;
    padding: 10px;
    transition: filter 200ms ease-in, transform 200ms ease-in;
    &:hover {
        cursor: pointer;
        filter: hue-rotate(15deg);
    }
    &:focus {
        transform: scale(0.95)
    }
`

const AddQuestionButton = () => {

    const addQuestionContext = useContext(AddQuestionContext);

    const click = () => {
        addQuestionContext.setValue(true);
    }

    return (
        <Fragment>
            <ButtonWrapper onClick={click}>
                Задать вопрос
            </ButtonWrapper>
            <AddQuestion />
        </Fragment>
    )
};

export default AddQuestionButton;