import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setHeight } from "../../store/view/view.actions";
import { HOC } from "../../types";

const AppWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 296px);
    * {
        box-sizing: border-box;
    };
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 10px 20px;
    box-sizing: border-box;
`;

const Layout = (props: HOC) => {

    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const updateHeight = () => {
            dispatch(setHeight(ref.current?.offsetHeight || 0));
        };

        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, [dispatch]);

    useEffect(() => {
        if (ref.current) {
            dispatch(setHeight(ref.current.offsetHeight));
        }
    }, [dispatch])

    return (
        <AppWrapper 
            ref={ref}
            >
            {props.children}
        </AppWrapper>
    )
};

export default Layout;