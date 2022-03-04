import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { content } from "../../content";
import { select } from "../../store/selector";
import Category from "./Section";

const SectionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 10px 0 50px 0;
    margin-top: 10px;
    border-radius: 15px;
`;

const Title = styled.h4`
    font-weight: 800;
    margin: 10px;
    width: calc(100% - 20px);
    text-align: start;
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