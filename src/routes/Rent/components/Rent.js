import React from 'react'
import { Link } from 'react-router'

class Rent extends React.Component {

	componentDidMount(){
		
		console.log("mount Rent")
		   
	}
	
	componentWillReceiveProps(){
		console.log(" Rent receive props")
		console.log(this.props)
	}
	
	
	
  render() {
	  var rentobjs = REAL_ESTATE_OBJS;
	  
	  console.log(rentobjs[0].id);
	  
	  var images = [];
	  
	  for  (var i = 0; i <  rentobjs.length; i++) {
		  
		  images.push(<li key={`${i}`}><Link to={`/rent/details/${rentobjs[i].id}`}><img className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`}></img></Link></li>);
	
	  }	  
	  	  	  
	  
	  console.log("this.props.params",this.props.params)
	  
    return (
      <div>
        <h2>Rent</h2>
        
        <div className="row">
        <div className="col-md-6">{images}</div>
        <div className="col-md-6">{this.props.children }</div>
        </div>
        
      </div>
    )
  }

}

module.exports = Rent