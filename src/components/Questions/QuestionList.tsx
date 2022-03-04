import React, { useRef, WheelEvent, Fragment, useEffect } from 'react';
import { Question } from "../../types";
import styled from 'styled-components';
import { select } from '../../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import QuestionElement from './Question';
import { setSize } from '../../store/questions/questions.action';

interface Props {
    questions: Question[],
    loadNextPage: () => void
}

const QuestionWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:  flex-start;
    width: 100%;
    padding-right: 20px;
`;

const QuestionContainerWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100%;
    overflow-y: scroll;
`;

const QuestionList = ({questions, loadNextPage} : Props) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const checkOverFlow = (contentHeight: number, scrollTop: number, wrapperHeight: number) => {
        return contentHeight - scrollTop < wrapperHeight * 1.5
    };

    const height = useSelector(select.view.height);

    const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
        if (!containerRef.current || !wrapperRef.current) return;
        if (e.deltaY > 0 && checkOverFlow(
            containerRef.current.offsetHeight,
            wrapperRef.current.scrollTop,
            wrapperRef.current.offsetHeight
        )) {
            loadNextPage()
        };
    };

    useEffect(() => {
        const size = Math.round(1.5 * height / 95);
        dispatch(setSize(size));
    }, [dispatch, height]);

    useEffect(() => {

        if (containerRef.current && wrapperRef.current) {
            if (checkOverFlow(
                containerRef.current.offsetHeight,
                wrapperRef.current.scrollTop,
                wrapperRef.current.offsetHeight       
            )) {
                console.log("here");
                // loadNextPage()
            }
        }

    }, [questions, loadNextPage ])


    return (
        <QuestionContainerWrapper ref={wrapperRef}>
            <QuestionWrapperContainer 
                ref={containerRef}
                onWheel={handleScroll}>
                {!!questions && questions
                    .map((question, id) => {
                return (
                    <Fragment key={id}>
                        <QuestionElement question={question}/>
                    </Fragment>
                )
            })}
            </QuestionWrapperContainer>
        </QuestionContainerWrapper>
        )
};

export default QuestionList;