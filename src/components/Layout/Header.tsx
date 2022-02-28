import styled from "styled-components";
import { theme } from "../../theme";
import AddQuestionButton from "../AddQuestion/AddQuestionButton";
import PageTitle from "./PageTitle";

const HeaderWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.pageHeaderBackground};
    position: relative;
`;

const Header = () => {

    return (
        <HeaderWrapper>
            <PageTitle>
                Задачи
            </PageTitle>

            <AddQuestionButton />
        </HeaderWrapper>
    )
};

export default Header;