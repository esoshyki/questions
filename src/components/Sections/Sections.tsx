import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { content } from "../../content";
import { select } from "../../store/selector";
import { theme } from "../../theme";
import Category from "./Section";

const SectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 10px 0 50px 0;
    border: 1px solid ${theme.colors.borderGray};
    margin-top: 10px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px ${theme.colors.borderGray};
`;

const Title = styled.h4`
    font-weight: 800;
    margin: 10px;
`

const Sections = () => {

    const sections = useSelector(select.questions.sections);

    return (
        <SectionsWrapper>
            <Title>{content.sections.title}</Title>
            <Fragment>
                {
                    !!sections && sections.map((section, id) => {

                        return (
                            <Fragment key={id}>
                                {<Category name={section.NAME} id={section.ID}/>}
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        </SectionsWrapper>
    )
};

export default Sections;