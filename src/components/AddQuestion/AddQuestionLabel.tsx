import styled from "styled-components";
import { theme } from "../../theme";

export const AddQuestionLabel = styled.label<{
    error: boolean
}>`
    font-size: 14px;
    font-weight: 800;
    font-family: ${theme.fonts.main};
    color: ${props => props.error ? theme.colors.error : theme.colors.textGray};
    margin: 10px 0 10px 0;
    text-align: left;
    width: 100%;
`