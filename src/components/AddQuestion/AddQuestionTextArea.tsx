import styled from "styled-components";
import { theme } from "../../theme";

export const AddQuestionTextArea = styled.textarea`
    width: 500px;
    min-height: 400px;
    padding: 10px;
    font-family: ${theme.fonts.main};
    background-color: #fff;
    color: ${theme.colors.textGray};
    margin: 10px 0;

    &:focus {
        outline: none !important;
        border: 1px solid ${theme.colors.borderGray};
        border-width: 2px;
    }
`