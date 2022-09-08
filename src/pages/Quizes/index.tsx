import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { RouteComponentProps } from 'react-router'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'
import { ApplicationState } from '../../store'
import { Quiz } from '../../store/quiz/types'
import { fetchRequest, answerSet } from '../../store/quiz/actions'

interface PropsFromState {
  loading: boolean
  data: Quiz[]
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  answerSet: typeof answerSet
}

type AllProps = PropsFromState & PropsFromDispatch
interface Quizes extends RouteComponentProps, AllProps { }

const Quizes: React.FC<Quizes> = (props: Quizes) => {
  const { loading, data } = props
  const [id, setId] = useState(0)
  const [correctId, setCorrectId] = useState([-1])
  const { fetchRequest: fr, answerSet: setA } = props
  useEffect(() => {
    fr()
  }, [fr])

  const checkAnswer = useCallback(
    (key: string) => {
      if (id === 9) {
        setA(correctId)
        props.history.push('/result')
      } else if (data[id].correct_answer === 'True') {
        const tmpArray = correctId
        tmpArray[tmpArray.length] = id
        setCorrectId(tmpArray)
      }
      setId(id + 1)
    },
    [setId, id, correctId, props, data, setA]
  )

  const renderData = useMemo(() => {
    if (!loading && data.length > 0) {
      const quizData = data[id]
      return (
        <div className="container">
          <div className="content alignCenter">
            <div className="pageHeader">
              <h1>{quizData.category}</h1>
            </div>
            <div className="pageContent">
              <p className="f2e">{quizData.question}</p>
            </div>
            <div className="pageFooter">
              <div>
                <Button color="primary" variant="contained" onClick={e => checkAnswer('True')} className="btnDefault mr-15">
                  Yes
                </Button>
                <Button className="btnDefault" onClick={e => checkAnswer('False')} color="secondary" variant="contained">
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }, [id, data, loading, checkAnswer])

  return (
    <div>
      {loading && (
        <LoadingOverlay>
          <LoadingOverlayInner>
            <LoadingSpinner />
          </LoadingOverlayInner>
        </LoadingOverlay>
      )}
      {renderData}
    </div>
  )
}

const mapStateToProps = ({ quiz }: ApplicationState) => ({
  loading: quiz.loading,
  errors: quiz.errors,
  data: quiz.data
})

const mapDispatchToProps = {
  fetchRequest,
  answerSet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quizes)
