import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import LoadingOverlay from '../../components/Loading/LoadingOverlay'
import LoadingOverlayInner from '../../components/Loading/LoadingOverlayInner'
import LoadingSpinner from '../../components/Loading/LoadingSpinner'
import { ApplicationState } from '../../redux'
import { fetchRequest, answerSet } from '../../redux/quiz/actions'
import PageHeader from '../../components/Page/PageHeader'
import PageContent from '../../components/Page/PageContent'
import { IQuizes } from '../../interfaces'

const Quizes: React.FC<IQuizes> = (props: IQuizes) => {
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
            <PageHeader text={quizData.category} />
            <PageContent text={quizData.question} />
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
