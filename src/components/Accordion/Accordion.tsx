import React, {ReactNode, useContext, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import PlusIcon from '../../assets/plus.png'
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/selector";
import { setResize } from "../../store/view/view.actions";

const Container = styled.div`
    width: 100%;
    margin: 0;
    border-bottom: 1px solid ${theme.colors.borderGray};
    position: relative;
    overflow: hidden;
    font-family: Roboto, Open Sans, Helvetica Neue, sans-serif;
    &:last-child {
        border-bottom: none;
    }
`;

const AccordionHeader = styled.div<{
    backgroundColor: string,
    color: string,
    visible: boolean
}>`
    position: relative;
    width: 100%;
    background-color: ${props => props.visible ? "#fff" : props.backgroundColor};
    color: ${props => props.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 5;
    transition: background-color 100ms ease-in;
    &:hover {
        cursor: pointer;
        filter: hue-rotate(10deg);
    }
    border-bottom: none;
    font-weight: 900;
    padding: 30px 20px;
`;

const AccordionBody = styled.div<{
    visibleHeight: number
}>`
    width: 100%;
    position: relative;
    opacity: ${props => props.visibleHeight ? 1 : 0};
    transition: opacity 100ms linear 0s, height 300ms linear;
    user-select: none;
    z-index: 4;
    overflow: hidden;
    top: 0;
    height: ${props => props.visibleHeight ? `${props.visibleHeight}px` : "0"};
    padding: ${props => props.visibleHeight ? "10px" : "0"};
    color: ${theme.colors.textGray};
`;

const AccordionContent = styled.div<{
    visible: boolean
}>`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: transform 150ms ease-in 0s, opacity 500ms ease-in 200ms;
    top: ${props => props.visible ? "translateY(0%)" : "translateY(-100%)"};
    opacity: ${props => props.visible ? 1 : 0};
`;

const HeaderIcon = styled.div<{
    visible: boolean
}>`
    position: absolute;
    right: 30px;
    top: 30px;
    width: 20px;
    height: 20px;
    background-image: url(${PlusIcon});
    background-size: cover;
    transform: ${props => props.visible ? "rotate(45deg)" : "rotate(0deg)"};
    transition: transform 100ms ease-in, opacity 80ms ease-in;
    opacity: 0.5;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    
`;

const Accordion = ({ children, backgroundColor, color, headerText, parent } : { 
    children: ReactNode,
    backgroundColor: string;
    color: string;
    headerText: string;
    parent?: true
}) => {

    const dispatch = useDispatch();
 
    const [visibleHeight, setVisibleHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const resize = useSelector(select.view.resize);

    const onClick = () => {
        if (visibleHeight) {
            setVisibleHeight(0)
        } else {
            setVisibleHeight(ref.current?.offsetHeight || 0);
        }
    };

    const onTransitionEnd = () => {
        if (!parent) {
            dispatch(setResize(true))
        }
    };

    useEffect(() => {
        if (resize) {
            if (parent) {
                if (typeof ref.current?.offsetHeight === "number") {
                    setVisibleHeight(ref.current.offsetHeight);
                    dispatch(setResize(false));
                }
            }
        }
    }, [resize, parent, dispatch]);

    return (
        <Container >
            <AccordionHeader 
                backgroundColor={backgroundColor}
                color={color}
                onClick={onClick}
                visible={visibleHeight !== 0}
                >
                {headerText}
                <HeaderIcon visible={visibleHeight !== 0}/>
            </AccordionHeader>

            <AccordionBody visibleHeight={visibleHeight} onTransitionEnd={onTransitionEnd} >
                <AccordionContent ref={ref} visible={visibleHeight !== 0}>
                    {children}
                </AccordionContent>

            </AccordionBody>
        </Container>
    )
};

export default Accordion;