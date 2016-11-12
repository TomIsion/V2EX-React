import React from 'react'

import List from './list/list'
import Side from './side/side'

import './main.scss'

class Main extends React.Component {
  render() {
    return (
      <main>
        <section>
          <Side />
          <List />
        </section>
      </main>
    )
  }
}

export default Main

