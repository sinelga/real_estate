import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h3>Course Dashboard</h3>
        <Link to="/apartment/0/0">Modal</Link>
      </div>
    )
  }
}

export default Dashboard
