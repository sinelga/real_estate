import React from 'react'
import { Link } from 'react-router'
import { Button} from 'react-bootstrap'


class AllDetails extends React.Component {
	
	constructor(props){
    super(props);
//    this.state = {
//    	showModal: false
//    	
//    }
//    this.close =this.close.bind(this)
  }
	
		
//	close(){
//		    this.setState({ showModal: false });
//		 	
//	}
	
	 componentWillUnmoun(){
		 
		 console.log("ModalShowAllImg  componentWillUnmount")
		 
	 } 
	 
	 componentWillMoun(){
		 
		 console.log("ModalShowAllImg  componentWillMount")
		 
	 } 	 
	 
	 
	componentDidMount(){

//		this.setState({ showModal: true });
		
		   
	}
	componentWillReceiveProps(){
//		this.setState({ showModal: true });
	}
	
	
  render() {
	  
	  var realestOBJ = REAL_ESTATE_OBJS[this.props.params.id]
//	  var modallink = "/rent/details/"+this.props.params.id+"/modal";
//	  var images = [];
//	
//		for (var i = 0; i <  realestOBJ.actions.action[1].images.image.length; i++) {
//			images.push(<CarouselItem key={`${i}`}><img width={900} height={500} alt="900x500" src={`/images/${realestOBJ.id}/karusel/${i}.jpg`}/></CarouselItem>);
//		}
	  	  	  
    return (
      <div>
       <h2>All Details </h2>
       Price: {realestOBJ.actions.action[1].price}

               

      </div>
    )
  }

}

module.exports = AllDetails