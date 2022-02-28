import reportWebVitals from './reportWebVitals'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Questions from './Questions'
import { LoadingContext, SearchContext } from './contexts'
import { ReactNode } from 'react'
import { LoadingValue, SearchValue } from './types'

interface WrapperProps {
    children: ReactNode
}

const ContextWrapper = ({ children }: WrapperProps) => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const loadingValue: LoadingValue = {
        value: loading,
        setValue: (value: boolean) => setLoading(value),
    }

    const searchValue: SearchValue = {
        value: search,
        setValue: (value: string) => setSearch(value),
    }

    return (
        <LoadingContext.Provider value={loadingValue}>
            <SearchContext.Provider value={searchValue}>
                {children}
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
