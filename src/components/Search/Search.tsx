import { useContext, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../../contexts";
import Icon from '../../assets/search.png';

const SearchWrapper = styled.div`
    position: absolute;
    top: 20px;
    height: 40px;
    width: 200px;
    right: 0;
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
    width: 100%;
    padding: 10px;
    right: ${props => props.visible ? 0 : "-100%"};
    transition: right 200ms ease-in;
`;

const SearchIcon = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-image: url(${Icon});
    background-size: cover;
    z-index: 6;
    &:hover {
        cursor: pointer;
        transform: scale(1.03)
    }
`;

const Search = () => {

    const [visible, setVisible] = useState(false);
    const searchContext = useContext(SearchContext);

    return (
        <SearchWrapper>
            <SearchInput 
                visible={visible}
                value={searchContext.value} 
                onChange={e => searchContext.setValue(e.target.value)}
                className="ui-ctl-inline"
                />
            <SearchIcon 
                onClick={() => setVisible(!visible)}
            />
        </SearchWrapper>
    )
};

export default Search;