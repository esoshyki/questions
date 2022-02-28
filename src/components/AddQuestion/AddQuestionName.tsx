import styled from "styled-components";
import { theme } from "../../theme";

export const AddQuestionName = styled.input<{
    error: boolean
}>`
    width: 100%;
    border: 1px solid ${props => props.error ? theme.colors.error : theme.colors.borderGray};
    padding: 10px;
    color: ${props => props.error ? theme.colors.error : theme.colors.textGray};
    &:focus {
        outline: none;
        border-color: #000;
    }
`;