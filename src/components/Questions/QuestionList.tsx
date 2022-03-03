import React, { useRef, WheelEvent, Fragment, useEffect } from 'react';
import { Question } from "../../types";
import styled from 'styled-components';
import { select } from '../../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import QuestionElement from './Question';
import { getQuestions, setSize } from '../../store/questions/questions.action';

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


    const loading = useSelector(select.questions.loading);
    const size = useSelector(select.questions.size);
    const height = useSelector(select.view.height);


    const checkOverflow = () => {
        if (containerRef.current && wrapperRef.current && questions) {
            const contentHeight = containerRef.current.offsetHeight;
            const scrollTop = wrapperRef.current.scrollTop;
            const wrapperHeight = wrapperRef.current.offsetHeight;
            console.log(
                `contentHeight: ${contentHeight}
                 scrollTop: ${scrollTop}
                 wrapperHeight: ${wrapperHeight}
                `
            )
            if (contentHeight - scrollTop < wrapperHeight * 1.5) {
                return true
            }
        }
        return false;
    }

    const handleScroll = (e: WheelEvent<HTMLDivElement>) => {
        if (e.deltaY > 0 && checkOverflow()) {
            loadNextPage()
        };
    };

    useEffect(() => {
        const size = Math.round(1.5 * height / 95);
        dispatch(setSize(size));
    }, [height]);

    useEffect(() => {
        if (containerRef.current) {
            console.log(containerRef.current.offsetHeight);
        }
    }, [containerRef.current]);

    useEffect(() => {
        if (checkOverflow()) {
            loadNextPage()
        }
    }, [questions])


    return (
        <QuestionContainerWrapper>
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