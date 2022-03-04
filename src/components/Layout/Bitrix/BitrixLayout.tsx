import React, { ReactChild} from 'react'
import styled from 'styled-components'
import { BXHeader } from './BitrixHeader'
import { BXLeftAsside } from './BXLeftAsside'
import { BXRightAsside } from './BXRightAsside';

const Wrapper = styled.div`
    width: 100vw;
    position: relative;
`;

const Center = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 240px auto 64px;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const ButtonBox = styled.div`
    width: 100%;
    height: 60px;
    background-color: #fff;
`

const ToolBarContainer = styled.div`
    width: 100%;
    height: 73px;
    background-color: #e7e8ea;
`

const BitrixLayout = ({ children } : {
    children: ReactChild
}) => {

    return (
        <Wrapper>
            <BXHeader />
            <Center>
                <BXLeftAsside />
                <Content>
                    <ButtonBox />
                    <ToolBarContainer />
                    {children}
                </Content>
                <BXRightAsside />
                
            </Center>
        </Wrapper>
    )
}

export default BitrixLayout;