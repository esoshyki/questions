import React from "react";
import styled from "styled-components";
import LoadingIcon from '../assets/loading.gif';

const LoadingWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: url(${LoadingIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;
`

const Loading = () => {

    return (
        <LoadingWrapper />
    )
};

export default Loading;