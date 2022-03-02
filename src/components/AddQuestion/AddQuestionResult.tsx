import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setAddQuestionResult, setShowAddQuestion } from "../../store/addquestion/addquestion.actions";
import { select } from "../../store/selector";
import { theme } from "../../theme";

const Wrapper = styled.div`
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 150px);
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid ${theme.colors.borderGray};
    z-index: 500;
`;

const AddQuestionResult = () => {

    const dispatch = useDispatch();

    const result = useSelector(select.addQuestion.result);

    const handleClick = () => {
        dispatch(setAddQuestionResult(""));
        dispatch(setShowAddQuestion(false));
    }

    return (
        <Wrapper>
            <p>{result}</p>

            <button 
                onClick={handleClick}
                className="ui-btn">
                OK
            </button>
        </Wrapper>
    )
};

export default AddQuestionResult;

