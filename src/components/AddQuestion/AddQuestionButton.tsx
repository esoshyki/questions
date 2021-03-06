import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setShowAddQuestion } from "../../store/addquestion/addquestion.actions";
import AddQuestion from "./AddQuestion";


export const ButtonWrapper = styled.button`
    width: 200px;
    margin: 20px auto;
`;

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