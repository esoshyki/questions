import { Fragment } from "react";
import { useSelector } from "react-redux";
import { select } from "../../store/selector";
import QuestionElement from "./Question";
import QuestionList from "./Questions";


const Found = () => {

    const found = useSelector(select.questions.found);

    return (
        <Fragment>
            {found && found.map((question, id) => {
                return (
                    <Fragment key={id}>
                        <QuestionElement question={question}/>
                    </Fragment>
                    )
            })}
        </Fragment>
    )
};

export default Found;