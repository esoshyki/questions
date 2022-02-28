import styled from "styled-components";
import { theme } from "../../theme";

export const AddQuestionTextArea = styled.textarea<{
    error: boolean
}>`
    width: 500px;
    min-height: 400px;
    padding: 10px;
    font-family: ${theme.fonts.main};
    background-color: #fff;
    color: ${props => props.error ? theme.colors.error : theme.colors.textGray};
    border: 1px solid ${props => props.error ? theme.colors.error : theme.colors.borderGray};

    &:focus {
        outline: none !important;
        border: 1px solid #000;
    }
`