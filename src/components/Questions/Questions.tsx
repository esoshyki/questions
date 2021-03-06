import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { fakeSessionId } from '../../api/instance'
import { getQuestions, setLoaded } from '../../store/questions/questions.action'
import { select } from '../../store/selector'
import QuestionList from './QuestionList'

const Title = styled.h2`
    font-weight: 900;
    text-align: start;
    width: calc(100% - 20px);
    margin: 0 0 30px;
`

const QuestionContainer = () => {
    const dispatch = useDispatch()
    const selectedSection = useSelector(select.questions.selectedSection)
    const loading = useSelector(select.questions.loading)
    const size = useSelector(select.questions.size)
    const found = useSelector(select.questions.found)
    const searchQuery = useSelector(select.questions.searchQuery)
    const isFound = useSelector(select.questions.isFound)
    const loaded = useSelector(select.questions.loaded)

    useEffect(() => {
        if (loaded) return;
        if (selectedSection) {
            if (!selectedSection.page) {
                selectedSection.page = 1
            }
            dispatch(setLoaded(true))
            dispatch(
                getQuestions({
                    size,
                    selectedSection,
                    sessionId: window.faqConfig?.sessionId || fakeSessionId,
                }))
            }
    }, [dispatch, selectedSection, size, loaded])

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
