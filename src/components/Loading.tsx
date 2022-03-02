import React from "react";
import styled, { keyframes } from "styled-components";
import { zIndexes } from "../zIndexes";

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }
    50% {
        transform: rotate(180def)
    }
    100% {
        transform: rotate(360deg)
    }
`;

const LoaderLayout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndexes.loading};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 800px;
`;

const LoaderSpinnerEclipse = styled.div`
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: transparent;
`;

const LoaderInner = styled.div`
    position: absolute;
    animation: ${rotate} 1s linear infinite;
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 #e15b64;
    transform-origin: 80px 82px;
    box-sizing: border-box;
`;

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
`;

const Loading = () => {

    return (
        <LoaderLayout>
            <LoaderSpinnerEclipse>
                <LoaderWrapper>
                    <LoaderInner />
                </LoaderWrapper>
            </LoaderSpinnerEclipse>
        </LoaderLayout>
    );
};

export default Loading;