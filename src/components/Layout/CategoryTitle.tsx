import React from "react";
import styled from "styled-components";

const CategoryTitleWrapper = styled.h3`
    font-size: 1.4rem;
    font-weight: 900;
    font-family: Roboto, Open Sans, Helvetica Neue, sans-serif;
`;

interface CategoryTitleProps {
    children: any
}

const CategoryTitle = ({children} : CategoryTitleProps) => {

    return (
        <CategoryTitleWrapper>
            {children}
        </CategoryTitleWrapper>
    )
};

export default CategoryTitle;