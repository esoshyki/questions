import { Question } from "../../types";

interface Props {
    question: Question[]
}

const QuestionList = ({question} : Props) => {

    return (
        <QuestionContainerContainer 
            ref={containerRef}
            onWheel={handleScroll}>
            {!!selectedSection.questions && selectedSection.questions
                .map((question, id) => {
            return (
                <Fragment key={id}>
                    <Question question={question}/>
                </Fragment>
            )
        })}
        </QuestionContainerContainer>
        )
};

export default QuestionList;