import { Question } from "../../types";
import Typography from "../ui/Typography";
import styled from 'styled-components'

interface QuestionBodyProps {
  question: Question
}

const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 40px;
`

const QuestionBody = ({question} : QuestionBodyProps) => {

  return (
    <Body>
      <Typography.H2>{question.NAME}</Typography.H2>

      <div dangerouslySetInnerHTML={{__html: question.DETAIL_TEXT}} />
    </Body>
  )
};

export default QuestionBody;