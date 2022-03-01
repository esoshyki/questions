import { useContext, useRef } from "react";
import styled from "styled-components";
import { SearchContext } from "../../contexts";
import Icon from '../../assets/search.png';

const SearchWrapper = styled.div`
    position: absolute;
    top: 20px;
    height: 40px;
    width: 400px;
    left: 0;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 5;
    overflow: hidden;
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
    z-index: 6;
    &:hover {
        cursor: pointer;
        transform: scale(1.03)
    }
`;

const Search = () => {

    const searchContext = useContext(SearchContext);
    const visible = searchContext.visible;

    const ref = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        searchContext.setVisible(!visible)
    }

    const handleTransitionEnd = () => {
        
        if (visible && ref.current) {
            ref.current.focus()
        }
    }

    return (
        <SearchWrapper>
            <SearchInput 
                ref={ref}
                visible={visible}
                value={searchContext.value} 
                onChange={e => searchContext.setValue(e.target.value)}
                onTransitionEnd={handleTransitionEnd}
                className="search-input"
                />
            <SearchIcon 
                onClick={handleClick}
                className="search-button"
            />
        </SearchWrapper>
    )
};

export default Search;