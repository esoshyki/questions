import { ReactNode, useRef, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { select } from "../../store/selector";
import { setHeight } from "../../store/view/view.actions";
import { HOC } from "../../types";

const AppWrapper = styled.div<{
    bitrix: boolean
}>`
    width: 100%;
    max-width: 1000px;
    margin: 0 10px;
    min-height: 800px;
    height: ${props => props.bitrix ? "100%" : "100vh"};
    * {
        box-sizing: border-box;
    };
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 2fr 1fr;
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
    }, []);

    useEffect(() => {
        if (ref.current) {
            dispatch(setHeight(ref.current.offsetHeight));
        }
    }, [ref.current])

    return (
        <AppWrapper 
            
            bitrix={!!window.faqConfig?.sessionId}
            ref={ref}
            >
            {props.children}
        </AppWrapper>
    )
};

export default Layout;