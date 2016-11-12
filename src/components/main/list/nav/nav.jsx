import React, { PropTypes } from 'react'

import cn from 'classnames'

import './nav.scss'

const propTypes = {
  navs: PropTypes.array.isRequired,
}
const defaultProps = {
  navs: [
    {
      name: '技术',
      s_name: 'tech',
    },
    {
      name: '创意',
      s_name: 'creative',
    }
  ],
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
          {
            this.props.navs.map((ele, index) =>
              <a href="" key={index} className={cn({ current: index === 0 })}>{ ele.name }</a>
            )
          }
      </nav>
    )
  }
}

Nav.PropTypes = propTypes
Nav.defaultProps = defaultProps

export default Nav
