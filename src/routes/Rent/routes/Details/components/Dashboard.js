import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap';

class Dashboard extends React.Component {
	
	componentDidMount(){
		
//		console.log("mount Dashboard ")
		
		   
	}
	componentWillReceiveProps(){
//		console.log(" Rent Dashboard receive props")
//		console.log(this.props)
	}
	
  render() {
	  
	  var realestOBJ = REAL_ESTATE_OBJS[this.props.params.id]
	  var modallink = "/rent/details/"+this.props.params.id+"/modal";
	  var images = [];
	
		for (var i = 0; i <  realestOBJ.images.image.length; i++) {

			images.push(<li key={`${i}`}><img className='aparimg' src={`/images/${realestOBJ.id}/${i}.jpg`}></img></li>);

		}
	  
    return (
      <div>
        <h2>Details</h2>  
        <Link to={modallink}><Button bsStyle="primary" bsSize="large">All images</Button></Link>
        {images}
        {this.props.children }
      </div>
    )
  }

}

module.exports = Dashboard