import * as React from 'react'
import { NavLink } from 'react-router-dom'
import PageHeader from '../../components/Page/PageHeader'
import PageContent from '../../components/Page/PageContent'

const Home = () => {
  const headerText = 'Welcome to the Trivia Challenge!'
  const contentText = 'You will be persented with 10 True or False questions.'
  return (
    <div className="container">
      <div className="content alignCenter">
        <PageHeader text={headerText} />
        <PageContent text={contentText} />
        <div className="pageFooter">
          <p className="f2e">Can you score 100%?</p>
          <NavLink to="/quiz" activeClassName="is-active">
            <h2 className="colorBlue">BEGIN</h2>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
