import React, {ReactNode, useContext, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { ResizeContext } from "../../contexts";

const Container = styled.div`
    width: 100%;
    margin: 10px 0;
    box-shadow: 2px 2px 5px gray;
    position: relative;
    overflow: hidden;
`;

const AccordionHeader = styled.div<{
    backgroundColor: string,
    color: string
}>`
    width: 100%;
    background-color: ${props => props.backgroundColor};
    height: 50px;
    color: ${props => props.color};
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 5;
    &:hover {
        cursor: pointer;
        filter: hue-rotate(10deg);
    }
`;

const AccordionBody = styled.div<{
    visibleHeight: number
}>`
    width: 100%;
    position: relative;
    opacity: ${props => props.visibleHeight ? 1 : 0};
    transition: opacity 100ms linear 500ms, height 300ms linear;
    user-select: none;
    z-index: 4;
    top: 0;
    height: ${props => props.visibleHeight ? `${props.visibleHeight}px` : "0"};
    padding: ${props => props.visibleHeight ? "10px" : "0"};
`;

const AccordionContent = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Accordion = ({ children, backgroundColor, color, headerText, parent } : { 
    children: ReactNode,
    backgroundColor: string;
    color: string;
    headerText: string;
    parent?: true
}) => {
 
    const [visibleHeight, setVisibleHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const resizeCtx = useContext(ResizeContext);

    const onClick = () => {
        if (visibleHeight) {
            setVisibleHeight(0)
        } else {
            setVisibleHeight(ref.current?.offsetHeight || 0);
        }
    };

    const onTransitionEnd = () => {
        if (!parent) {
            resizeCtx.setValue(true);
        }
    };

    useEffect(() => {
        if (resizeCtx.value) {
            if (parent) {
                if (typeof ref.current?.offsetHeight === "number") {
                    setVisibleHeight(ref.current.offsetHeight);
                    resizeCtx.setValue(false);
                }
            }
        }
    }, [resizeCtx.value])

    return (
        <Container >
            <AccordionHeader 
                backgroundColor={backgroundColor}
                color={color}
                onClick={onClick}
                >
                {headerText}
            </AccordionHeader>

            <AccordionBody visibleHeight={visibleHeight} onTransitionEnd={onTransitionEnd} >
                <AccordionContent ref={ref}>
                    {children}
                </AccordionContent>

            </AccordionBody>
        </Container>
    )
};

export default Accordion;