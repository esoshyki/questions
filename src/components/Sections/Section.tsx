import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setLoaded, setSelectedSection } from "../../store/questions/questions.action";
import { select } from "../../store/selector";
import { theme } from "../../theme";

const CategoryWrapper = styled.div<{
    selected: boolean
}>`
    position: relative;
    width: 100%;
    margin: 0;
    border-bottom: 1px solid ${theme.colors.borderGray};
    background-color: ${props => props.selected ? theme.colors.gray : "#fff"};
    &:hover {
        cursor: pointer;
        background-color: ${theme.colors.gray}
    }
    &:nth-child(2) {
        border-top: 1px solid ${theme.colors.borderGray};
    }

`;

const CategoryTitle = styled.h6`
    font-size: 14px;
    font-weight: 300;
    color: ${theme.colors.textGray};
    margin: 10px;
`

const Category = ({ name, id } : { 
    name: string,
    id: number,
}) => {

    const dispatch = useDispatch();

    const selectedSection = useSelector(select.questions.selectedSection);

    const handleClick = () => {
        if (selectedSection?.ID === id) {
            dispatch(setSelectedSection(null));
            dispatch(setLoaded(false))
        } else {
            dispatch(setSelectedSection(id));
        }
    };

    return (
        <CategoryWrapper 
            onClick={handleClick}
            selected={selectedSection?.ID === id}>
            <CategoryTitle>
                {name}
            </CategoryTitle>
        </CategoryWrapper>
    )
};

export default Category;