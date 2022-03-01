import React, { Fragment } from "react";
import styled from "styled-components";
import { BitrixQuestion, BitrixSection } from "../../types";
import Category from "./Category";

const CategoriesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
`;

interface CategoriesProps {
    questions: BitrixQuestion[];
    sections: BitrixSection[];
}

const CategoriesElement = ({ questions, sections } : CategoriesProps) => {

    return (
        <CategoriesWrapper>

            <Fragment>
                {
                    sections && sections.map((section, id) => {
                        return (
                            <Fragment key={id}>
                                <Category 
                                    questions={questions.filter(question => question.IBLOCK_SECTION_ID === section.ID)}
                                    category={section.NAME}
                                />
                            </Fragment>
                        )
                    })
                }
            </Fragment>
        </CategoriesWrapper>
    )
};

export default CategoriesElement;