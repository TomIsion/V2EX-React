import React from 'react'

// import UserPanel from './userpanel/userpanel'
import HotPanel from './hotpanel/hotpanel'

import './side.scss'

class Side extends React.Component {
  render() {
    return (
      <aside>
        <HotPanel />
      </aside>
    )
  }
}

export default Side
