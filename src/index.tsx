import reportWebVitals from './reportWebVitals'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Questions from './Questions'
import { AddQuestionContext, LoadingContext, SearchContext } from './contexts'
import { ReactNode } from 'react'
import { AddQuestionValue, LoadingValue, SearchValue } from './types'
import './index.css'

interface WrapperProps {
    children: ReactNode
}

const ContextWrapper = ({ children }: WrapperProps) => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [showAddQuestion, setShowAddQuestion] = useState(false);

    const loadingValue: LoadingValue = {
        value: loading,
        setValue: (value: boolean) => setLoading(value),
    }

    const searchValue: SearchValue = {
        value: search,
        setValue: (value: string) => setSearch(value),
    }

    const addQuestionValue: AddQuestionValue = {
        value: showAddQuestion,
        setValue: (value: boolean) => setShowAddQuestion(value)
    }

    return (
        <LoadingContext.Provider value={loadingValue}>
            <SearchContext.Provider value={searchValue}>
                <AddQuestionContext.Provider value={addQuestionValue}>
                    {children}
                </AddQuestionContext.Provider>
            </SearchContext.Provider>
        </LoadingContext.Provider>
    )
}

ReactDOM.render(
    <ContextWrapper>
        <Questions />
    </ContextWrapper>,
    document.getElementById('root')
)
reportWebVitals()
