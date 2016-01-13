import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
	
	componentDidMount(){
		
		console.log("mount Dashboard ")
		   
	}
	componentWillReceiveProps(){
		console.log(" details Dashboard receive props")
		console.log(this.props)
	}
	
  render() {
    return (
      <div>
        <h2>Details</h2>
        <Link to="apartment/0/0">Modal</Link>
      </div>
    )
  }

}

module.exports = Dashboard