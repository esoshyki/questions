import React, { ReactChild} from 'react'
import styled from 'styled-components'
import { BXHeader } from './BitrixHeader'

const Wrapper = styled.div`
    width: 100vw;
    position: relative;
`

const BitrixLayout = ({ children } : {
    children: ReactChild
}) => {

    return (
        <Wrapper>
            <BXHeader />
            {children}
        </Wrapper>
    )
}

export default BitrixLayout;