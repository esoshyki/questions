import React from "react";
import styled from "styled-components";
import LoadingIcon from '../assets/loading.gif';

const LoadingWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-image: url(${LoadingIcon});
    background-repeat: no-repeat;
    background-position: center;
`

const Loading = () => {

    return (
        <LoadingWrapper>

        </LoadingWrapper>
    )
};

export default Loading;