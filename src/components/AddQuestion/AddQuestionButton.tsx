import { Fragment, useContext } from "react";
import styled from "styled-components";
import { AddQuestionContext } from "../../contexts";
import { theme } from "../../theme";
import AddQuestion from "./AddQuestion";


export const ButtonWrapper = styled.button`
    /* background-color: ${theme.colors.green}; */
    position: absolute;
    right: 20px;
`

const AddQuestionButton = () => {

    const addQuestionContext = useContext(AddQuestionContext);

    const click = () => {
        addQuestionContext.setValue(true);
    }

    return (
        <Fragment>
            <ButtonWrapper onClick={click} className="ui-btn ui-btn-success">
                Задать вопрос
            </ButtonWrapper>
            <AddQuestion />
        </Fragment>
    )
};

export default AddQuestionButton;