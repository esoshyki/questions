import styled from "styled-components";
import { HOC } from "../../types";

const LeftWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: hidden;
`

const Left = (props: HOC) => {

    return (
        <LeftWrapper>
            {props.children}
        </LeftWrapper>

    )
};

export default Left;