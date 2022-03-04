import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fakeSessionId } from '../../api/instance'
import { getQuestions } from '../../store/questions/questions.action'
import { select } from '../../store/selector'
import QuestionList from './QuestionList'

const Title = styled.h2`
    font-weight: 900;
    text-align: start;
    width: calc(100% - 20px);
`

const QuestionContainer = () => {
    const dispatch = useDispatch();
    const selectedSection = useSelector(select.questions.selectedSection)
    const loading = useSelector(select.questions.loading)
    const size = useSelector(select.questions.size)
    const found = useSelector(select.questions.found)
    const searchQuery = useSelector(select.questions.searchQuery)
    const isFound = useSelector(select.questions.isFound);
    const ID = selectedSection?.ID || null;

    useEffect(() => {
        if (selectedSection) {
            const section = {
                ...selectedSection,
                page: selectedSection?.page || 1,
            }
            dispatch(
                getQuestions({
                    size,
                    selectedSection: section,
                    sessionId: window.faqConfig?.sessionId || fakeSessionId,
                })
            )
        }
    }, [dispatch, ID, size])

    const loadNextPage = () => {
        if (!loading && selectedSection) {
            if (selectedSection.page < selectedSection.pages) {
                dispatch(
                    getQuestions({
                        size,
                        selectedSection: {
                            ...selectedSection,
                            page: selectedSection.page + 1,
                        },
                        sessionId: window.faqConfig?.sessionId || fakeSessionId,
                    })
                )
            }
        }
    }

    return (
        <Fragment>
            <Title>
                {!!selectedSection && selectedSection.NAME}
                {isFound && searchQuery}
            </Title>
            {!found.length && !!selectedSection && (
                <QuestionList
                    questions={selectedSection.questions}
                    loadNextPage={loadNextPage}
                />
            )}
            {!!found.length && (
                <QuestionList questions={found} loadNextPage={() => {}} />
            )}
        </Fragment>
    )
}

export default QuestionContainer
