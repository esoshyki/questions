import styled from "styled-components";
import { theme } from "../../theme";

const Wrapper = styled.div`
    position: absolute;
    bottom: 30px;
    left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const Checkbox = styled.input`
    margin-right: 20px;
`;

const Label = styled.label`
    font-family: ${theme.fonts.main};
`;

interface Props {
    toggle: () => void;
    checked: boolean
}

const CheckBox = ({
    toggle,
    checked
} : Props) => {

    return (
        <Wrapper>
            <Checkbox 
                type="checkbox"
                checked={checked}
                onChange={toggle}
                />
            <Label>
                Обсудить лично
            </Label>
        </Wrapper>
    )
};

export default CheckBox;