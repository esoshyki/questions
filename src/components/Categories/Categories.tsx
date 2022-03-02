import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { select } from "../../store/selector";
import Category from "./Category";

const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

const CategoriesElement = () => {

    const sections = useSelector(select.questions.sections);
    const questions = useSelector(select.questions.questions);

    return (
        <CategoriesWrapper>

            <Fragment>
                {
                    !!sections && !!questions && sections.map((section, id) => {

                        const categoryQuestion = questions.filter(question => question.IBLOCK_SECTION_ID === section.ID);

                        return (
                            <Fragment key={id}>
                                {!!categoryQuestion.length && <Category 
                                    questions={categoryQuestion}
                                    name={section.NAME}
                                />}
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        </CategoriesWrapper>
    )
};

export default CategoriesElement;