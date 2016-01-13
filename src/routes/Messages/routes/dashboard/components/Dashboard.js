import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
	
	componentDidMount(){
		
		console.log("mount Dashboard ")
		   
	}
	componentWillReceiveProps(){
		console.log(" Messages Dashboard receive props")
		console.log(this.props)
	}
	
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <Link to="/messages/dashboard/details">Details</Link>
        {this.props.children }
      </div>
    )
  }

}

module.exports = Dashboard