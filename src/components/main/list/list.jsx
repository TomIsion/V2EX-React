import React from 'react'

import ListView from './listview/listview'
import Nav from './nav/nav'
// import NodeContainer from './nodecontainer/nodecontainer'

import './list.scss'

class List extends React.Component {
  render() {
    return (
      <div className="list-container">
        <Nav />
        <ListView />
        { /*<NodeContainer />*/}
      </div>
    )
  }
}

export default List

