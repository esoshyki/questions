import styled from "styled-components";
import { HOC } from "../../types";
import Layout from "./Layout";

const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Right = (props: HOC) => {

    return (
        <RightWrapper>
            {props.children}
        </RightWrapper>
    )
};

export default Right;