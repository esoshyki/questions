import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowAddQuestion } from "../../store/addquestion/addquestion.actions";
import { theme } from "../../theme";
import AddQuestion from "./AddQuestion";


export const ButtonWrapper = styled.button`
    /* background-color: ${theme.colors.green}; */
    position: absolute !important;
    right: 20px;
    top: 20px;
`

const AddQuestionButton = () => {

    const dispatch = useDispatch();

    const click = () => {
        dispatch(setShowAddQuestion(true))
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