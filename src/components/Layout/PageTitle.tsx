import React from "react";
import styled from "styled-components";

const PageTitleWrapper = styled.h3`
    font-size: 1.2rem;
    font-weight: 800;
    font-family: Roboto, Open Sans, Helvetica Neue, sans-serif;
    color: #fff;
    margin: 0;
`;

interface PageTitleProps {
    children: any
}

const PageTitle = ({children} : PageTitleProps) => {

    return (
        <PageTitleWrapper>
            {children}
        </PageTitleWrapper>
    )
};

export default PageTitle;