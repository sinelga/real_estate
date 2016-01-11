import React from 'react'
import Dashboard from './Dashboard'

class Apartment extends React.Component {
	
	componentDidMount(){
   
	}
		
	render() {
		var apartment = REAL_ESTATE_OBJS[this.props.params.id]
		var indents = [];
		for (var i = 0; i < apartment.imagesnumber; i++) {

			indents.push(<li key={`${i}`}><img className='aparimg' src={`/images/${apartment.id}/${i}.jpg`}></img></li>);
		}
		return (
		   <div>
		    {indents}
		   </div>
		);
				
  }
}

module.exports = Apartment 
