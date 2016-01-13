import React from 'react'
import { Link } from 'react-router'

class Messages extends React.Component {

	componentDidMount(){
		
		console.log("mount Messages")
		   
	}
	
	componentWillReceiveProps(){
		console.log(" Messages receive props")
		console.log(this.props)
	}
	
	
	
  render() {
	  
	  {this.props.children }
	  
    return (
      <div>
        <h2>Messages</h2>
        <Link to="/messages/dashboard">Modal</Link>
        {this.props.children }
        
      </div>
    )
  }

}

module.exports = Messages
