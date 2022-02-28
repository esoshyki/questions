import styled from "styled-components";
import { theme } from "../../theme";

export const AddQuestionName = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.borderGray};
    padding: 10px;
    &:focus {
        outline: none;
        border-color: #000;
    }
`;