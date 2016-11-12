import React from 'react'

import './header.scss'

class Header extends React.Component {
  handleKeyDown(e) {
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      window.open(`https://www.google.com/search?q=site:v2ex.com/t%20${e.target.value}`)
    }
  }

  render() {
    return (
      <header>
        <div className="container">
          <h1>V2EX</h1>
          <a href="">
            <img src={'/assets/images/logo@2x.png'} alt="V2EX" title="V2EX" />
          </a>
          <label htmlFor="keywords">
            <input
              type="text"
              id="keywords"
              onKeyDown={e => this.handleKeyDown(e)}
            />
          </label>
        </div>
      </header>
    )
  }
}

export default Header
