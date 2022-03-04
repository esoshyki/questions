import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import AddQuestionResult from './components/AddQuestion/AddQuestionResult'
import { useDispatch, useSelector } from 'react-redux'
import {
    getQuestions,
    getSections,
    setSelectedSection,
} from './store/questions/questions.action'
import { fakeSessionId } from './api/instance'
import { select } from './store/selector'
import Layout from './components/Layout'
import Left from './components/Layout/Left'
import Right from './components/Layout/Right'
import Sections from './components/Sections'
import Search from './components/Search'
import Questions from './components/Questions'
import AddQuestionButton from './components/AddQuestion/AddQuestionButton'
import BitrixLayout from './components/Layout/Bitrix/BitrixLayout'

declare global {
    interface Window {
        faqConfig: { sessionId: string }
    }
}

const App = () => {
    const sessionId = window.faqConfig?.sessionId || fakeSessionId

    const dispatch = useDispatch()

    const result = useSelector(select.addQuestion.result)
    const loading = useSelector(select.questions.loading)
    const sections = useSelector(select.questions.sections)
    const size = useSelector(select.questions.size)

    const [once, setOnce] = useState(false)

    useEffect(() => {
        dispatch(getSections(sessionId))
    }, [dispatch, sessionId])

    useEffect(() => {
        const sessionId = window.faqConfig?.sessionId || fakeSessionId
        if (sections.length && !once) {
            setOnce(true)
        }
        if (!once && sections.length) {
            const section = sections[0]
            dispatch(setSelectedSection(sections[0].ID))
            dispatch(
                getQuestions({
                    selectedSection: section,
                    sessionId,
                    size,
                })
            )
        }
    }, [dispatch, sections, once, size])

    return (
        <Layout>
            {loading && <Loading />}
            <Left>
                <Questions />
            </Left>

            <Right>
                <AddQuestionButton />
                <Search />
                <Sections />
            </Right>
            {result && <AddQuestionResult />}
        </Layout>
    )
}

const DevApp = () => {
    return (
        <BitrixLayout>
            <App />
        </BitrixLayout>
    )
}

export default DevApp;
// export default App;

