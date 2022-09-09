import React from 'react'

const Header = () => {
  return (
    <header className="message__header">
      <h1 className="message__subject flush--top push_quarter--bottom">G2i React Web Test - March 2022 Version</h1>
      <div className="message__attribution">
        <div className="message__meta">
          <figure className="message__avatar">
            <img
              srcSet="https://bc3-production-assets-cdn.basecamp-static.com/people/BAhpBMZOzgE=--68b8f96f03b42edde452b574fc4bf788b848aafa/avatar-64-x2?v=1 2x, https://bc3-production-assets-cdn.basecamp-static.com/people/BAhpBMZOzgE=--68b8f96f03b42edde452b574fc4bf788b848aafa/avatar-64-x1?v=1 1x, https://bc3-production-assets-cdn.basecamp-static.com/people/BAhpBMZOzgE=--68b8f96f03b42edde452b574fc4bf788b848aafa/avatar-64-x3?v=1 3x, https://bc3-production-assets-cdn.basecamp-static.com/people/BAhpBMZOzgE=--68b8f96f03b42edde452b574fc4bf788b848aafa/avatar-64-x4?v=1 4x"
              title="Adrian Carolli, Core Team Engineer at G2i"
              alt="Adrian Carolli"
              data-behavior="rich_avatar"
              data-rich-avatar-url="/people/30297798/rich_avatar"
              data-avatar-for-person-id="30297798"
              data-controller="lazy-image"
              className="avatar message__avatar-image"
              src="https://bc3-production-assets-cdn.basecamp-static.com/people/BAhpBMZOzgE=--68b8f96f03b42edde452b574fc4bf788b848aafa/avatar-64-x2?v=1"
              width="64"
              height="64"
            />
          </figure>
          Adrian Carolli
        </div>
        <div className="message__meta u-hide-on-template">
          Last updated&nbsp;
          <time dateTime="2021-10-15T14:20:30Z" data-local="time-or-date">
            September 8, 2022 10:00pm
          </time>
        </div>
      </div>
    </header>
  )
}

export default Header
