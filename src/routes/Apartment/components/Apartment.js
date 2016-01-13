import React from 'react'
import Dashboard from './Dashboard'
import ShowImages from './ShowImages'

class Apartment extends React.Component {
	
//	  constructor(props){
//		    super(props);
//		    this.state = {
//		      showimagesobj: Object
//		      
//		    }
//		  }
	
//	 <ShowImages apartmentobj ={apartment} />
	
	componentWillReceiveProps(){
		console.log("Apartment receive props")
		console.log(this.props);
	}
	
	
	componentDidMount(){
		
		console.log("mount Apartment")
		   
	}
		
	render() {
		var apartment = REAL_ESTATE_OBJS[this.props.params.id]
	
					
		return (
		  
		  <div>		
		  <Dashboard />		
		   <ShowImages />
		   
		   {this.props.children}
		   </div>
		  
		);
	}		
  }


module.exports = Apartment 
