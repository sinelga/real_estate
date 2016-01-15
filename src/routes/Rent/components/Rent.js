import React from 'react'
import { Link } from 'react-router'
import { Grid,Row,Col} from 'react-bootstrap'

class Rent extends React.Component {

	componentDidMount(){
		
//		console.log("mount Rent")
		   
	}
	
	componentWillReceiveProps(){
//		console.log(" Rent receive props")
//		console.log(this.props)
	}
			
  render() {
	  var rentobjs = REAL_ESTATE_OBJS;
	  
	  var images = [];
	  
	  for  (var i = 0; i <  rentobjs.length; i++) {
		  
		  images.push(<li key={`${i}`}><Link to={`/rent/details/${rentobjs[i].id}`}><img className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`}></img></Link></li>);
	
	  }	  
	  
    return (
      <div>
        <h2>Rent</h2>
        
    
         
        <Row className="show-grid">
        <Col xs={12} md={4}>{images}</Col>
        <Col xs={6} md={8}>{this.props.children }</Col>
      </Row> 
     
        
        
        
        
        
      </div>
    )
  }

}

module.exports = Rent