import React, { Fragment, useEffect, useRef, WheelEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fakeSessionId } from '../../api/instance';
import { getQuestions, setSize } from '../../store/questions/questions.action';
import { select } from '../../store/selector';
import { theme } from '../../theme';
import Question from './Question';

const QuestionListWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100%;
    overflow-y: scroll;
`;

const QuestionListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:  flex-start;
    width: 100%;
    padding-right: 20px;
`;

const Title = styled.h2`
    font-weight: 900;
    text-align: start;
    width: calc(100% - 20px);
`;

const QuestionList = () => {

    const dispatch = useDispatch();

    const selectedSection = useSelector(select.questions.selectedSection);
    const loading = useSelector(select.questions.loading);
    const size = useSelector(select.questions.size);
    const height = useSelector(select.view.height);

    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedSection) {
            const section = {
                ...selectedSection,
                page: selectedSection?.page || 1
            };
            dispatch(getQuestions({
                size,
                selectedSection: section,
                sessionId: window.faqConfig?.sessionId || fakeSessionId
            }));
        };
    }, [dispatch, selectedSection?.ID, size]);

    const checkOverflow = () => {
        if (containerRef.current && wrapperRef.current && selectedSection) {
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

    const loadNextPage = () => {
        if (!loading && selectedSection) {
            if (selectedSection.page < selectedSection.pages) {
                dispatch(getQuestions({
                    size,
                    selectedSection: {...selectedSection, page: selectedSection.page + 1},
                    sessionId: window.faqConfig?.sessionId || fakeSessionId
                }))
            };
        }
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
    }, [selectedSection?.questions])

    return (
        <Fragment>
            {selectedSection && <QuestionListWrapper ref={wrapperRef}>

                {selectedSection && <Title>{selectedSection.NAME}</Title>}
                
                <QuestionListContainer 
                    ref={containerRef}
                    onWheel={handleScroll}>
                    {!!selectedSection.questions && selectedSection.questions
                        .map((question, id) => {
                        return (
                            <Fragment key={id}>
                                <Question question={question}/>
                            </Fragment>
                        )
                    })}
                </QuestionListContainer>

            </QuestionListWrapper>}
        </Fragment>
    )
};

export default QuestionList;