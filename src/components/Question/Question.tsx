import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { api } from '../../api/api'
import { fakeSessionId } from '../../api/instance'
import { Question as QuestionType } from '../../types'
import Loading from '../Loading'
import Typography from '../ui/Typography'
import QuestionBody from './QuestionBody'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: calc(100vh - 300px);
  padding: 30px 50px;
`

const Question = ({ id }: { id?: number }) => {
  const [question, setQuestion] = useState<QuestionType | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const sessid = window?.faqConfig?.sessionId || fakeSessionId
    const fetchQuestion = async (id: number) => {
      setLoading(true)
      const fetchedQuestion = await api.getQuestionById(id, sessid)
      setQuestion(fetchedQuestion)
      setLoading(false)
    }

    if (id) {
      fetchQuestion(id)
    } else {
      setQuestion(null)
    }
  }, [id])

  useEffect(() => {
    console.log(question)
  }, [question])

  return (
    <Wrapper>
      {loading && <Loading />}

      {question && <QuestionBody question={question} />}

      {!question && !loading && (
        <Fragment>
          <Typography.H2 styles={{ color: 'darkred' }}>
            Вопрос не найден
          </Typography.H2>

          <Link to="/">
            <Typography.SPAN>Вернутся назад</Typography.SPAN>
          </Link>
        </Fragment>
      )}
    </Wrapper>
  )
}

export default Question
