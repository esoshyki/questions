import { ChangeEvent, KeyboardEvent, useRef } from "react";
import styled from "styled-components";
import Icon from '../../assets/search.png';
import { useDispatch, useSelector } from "react-redux";
import { select } from "../../store/selector";
import { searchQuestions, setSearchQuery } from "../../store/questions/questions.action";
import { fakeSessionId } from "../../api/instance";
import { getSections } from "../../store/questions/questions.action";
import { zIndexes } from "../../zIndexes";

const SearchWrapper = styled.div`
    position: relative;
    top: 20px;
    height: 40px;
    width: 100%;
    left: 0;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: ${zIndexes.searchWrapper};
    overflow: hidden;
    margin-bottom: 40px;
`;

const SearchInput = styled.input<{
    visible: boolean
}>`
    position: absolute;
    width: calc(100% - 50px);
    right: 0;
    transition: right 200ms ease-in;
    border: none;
    border-bottom: 2px solid black;
    padding: 10px;
    margin-right: 50px;
    &:focus {
        outline: none;
    }
`;

const SearchIcon = styled.div`
    position: absolute;
    top: -9px;
    right: 5px;
    width: 50px;
    height: 50px;
    background-image: url(${Icon});
    background-size: cover;
    z-index: ${zIndexes.searchIcon};
    &:hover {
        cursor: pointer;
        transform: scale(1.03)
    }
`;

const Search = () => {

    const searchQuery = useSelector(select.questions.searchQuery);

    const dispatch = useDispatch();

    const ref = useRef<HTMLInputElement>(null);

    const update = async () => {
        const sessionId = window.faqConfig?.sessionId || fakeSessionId;
        if (!ref.current?.value) {
            dispatch(getSections(sessionId));
        } else {
            dispatch(searchQuestions(sessionId));
        }
    }

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            update();
        }
    }

    return (
        <SearchWrapper>
            <SearchInput 
                onKeyPress={handleKeyPress}
                ref={ref}
                visible={true}
                value={searchQuery} 
                onChange={handleChange}
                className="search-input"
                placeholder="Поиск..."
                />
            <SearchIcon 
                onClick={update}
                className="search-button"
            />
        </SearchWrapper>
    )
};

export default Search;