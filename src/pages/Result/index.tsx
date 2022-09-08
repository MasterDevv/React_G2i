import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { RouteComponentProps } from 'react-router'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'
import { ApplicationState } from '../../store'
import { Quiz } from '../../store/quiz/types'
import { fetchRequest } from '../../store/quiz/actions'

interface PropsFromState {
  loading: boolean
  data: Quiz[]
  answer: number[]
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
}

type AllProps = PropsFromState & PropsFromDispatch
interface Result extends RouteComponentProps, AllProps { }

const Result: React.FC<Result> = (props: Result) => {
  const { loading, data, answer } = props
  const { fetchRequest: fr } = props
  useEffect(() => {
    if (loading === true) {
      fr()
    }
  }, [loading, fr])

  const renderData = useMemo(() => {
    if (!loading && data.length > 0) {
      return (
        <div className="container">
          <div className="content">
            <div className="alignCenter">
              <h1>You Scored</h1>
              <h2>{answer.length - 1}/10</h2>
            </div>

            <div>
              {data.map((quizData, key) => (
                <div className="item">
                  <p className="f1e">
                    {answer.indexOf(key) >= 0 ? (
                      <CheckCircleOutlineIcon color="primary" fontSize="large" />
                    ) : (
                      <HighlightOffIcon color="secondary" fontSize="large" />
                    )}
                    {quizData.question}
                  </p>
                </div>
              ))}
            </div>
            <div className="alignCenter">
              <Button color="primary" variant="contained" className="btnDefault" onClick={() => props.history.push('/quiz')}>
                Play Again
              </Button>
            </div>
          </div>
        </div>
      )
    }
  }, [data, loading, answer, props])

  return (
    <div>
      {loading ? (
        <LoadingOverlay>
          <LoadingOverlayInner>
            <LoadingSpinner />
          </LoadingOverlayInner>
        </LoadingOverlay>
      ) : (
        renderData
      )}
    </div>
  )
}

const mapStateToProps = ({ quiz }: ApplicationState) => ({
  loading: quiz.loading,
  errors: quiz.errors,
  data: quiz.data,
  answer: quiz.answer
})

const mapDispatchToProps = {
  fetchRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)
