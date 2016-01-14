import React from 'react'
import { Link } from 'react-router'

class ShowImages extends React.Component {
	
	
	
	componentWillReceiveProps(){
		console.log("Show Images receive props")
		console.log(this.props);
	}	
	
  render() {
	  
	console.log(this.props.apartmentobj) 
	
	console.log(this.props.children);

	
	
//			var images = [];
//			var apartment = this.props.apartmentobj;
//			for (var i = 0; i <  apartment.imagesnumber; i++) {
//
//				images.push(<li key={`${i}`}><img className='aparimg' src={`/images/${apartment.id}/${i}.jpg`}></img></li>);
//
//			}
    return (
    		
    	<div>
    	{this.props.children}
      <ul>
    
      </ul>
      <div>
      <Link to="/apartment/0/imgid">Modal</Link>
      </div>
      
      </div>
      
    )
  }
}

export default ShowImages
