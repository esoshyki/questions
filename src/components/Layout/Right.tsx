import styled from "styled-components";
import { HOC } from "../../types";

const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
`;

const Right = (props: HOC) => {

    return (
        <RightWrapper>
            {props.children}
        </RightWrapper>
    )
};

export default Right;