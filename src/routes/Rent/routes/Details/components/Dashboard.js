import React from 'react'
import { Link } from 'react-router'
import { Button,Row,Grid,Image } from 'react-bootstrap';

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

//			images.push(<Row key={`${i}`}><Image className='aparimgforall' src={`/images/${realestOBJ.id}/${i}.jpg`} rounded /></Row>);
			images.push(<Image key={`${i}`} className='aparimgforall' src={`/images/${realestOBJ.id}/${i}.jpg`}  thumbnail />);

		}
	  
    return (
      <div>
        <h3>Details for {realestOBJ.name}</h3>  
       <p><Link to={modallink}><Button bsStyle="primary" bsSize="large">All images</Button></Link></p>
        {images}
        {this.props.children }
      </div>
    )
  }

}

module.exports = Dashboard