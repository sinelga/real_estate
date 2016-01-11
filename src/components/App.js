/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalNav />
      
        {this.props.children || <Dashboard real_estate_objs={REAL_ESTATE_OBJS}  />}
        </div>
    )
  }
}

module.exports = App
