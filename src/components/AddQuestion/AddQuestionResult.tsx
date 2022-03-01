import { useContext } from "react";
import styled from "styled-components";
import { AddQuestionContext } from "../../contexts";
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

    const context = useContext(AddQuestionContext);
    const result = context.result;

    return (
        <Wrapper>
            <p>{result}</p>

            <button 
                onClick={() => context.setResult("")}
                className="ui-btn">
                OK
            </button>
        </Wrapper>
    )
};

export default AddQuestionResult;

