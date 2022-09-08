import * as React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="content alignCenter">
        <div className="pageHeader">
          <h1>Welcome to the Trivia Challenge!</h1>
        </div>
        <div className="pageContent">
          <p className="f2e">You will be persented with 10 True or False questions.</p>
        </div>
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
