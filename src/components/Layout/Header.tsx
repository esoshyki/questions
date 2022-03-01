import styled from "styled-components";
import AddQuestionButton from "../AddQuestion/AddQuestionButton";
import Search from "../Search";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Header = () => {

    return (
        <HeaderWrapper>
            <Search />
            <AddQuestionButton />
        </HeaderWrapper>
    )
};

export default Header;