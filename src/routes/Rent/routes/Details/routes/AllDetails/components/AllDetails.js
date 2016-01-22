import React from 'react'
import { Link } from 'react-router'
import { Button,ListGroup,ListGroupItem,Row,Col} from 'react-bootstrap'


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
	  var contactlink = "/rent/details/"+this.props.params.id+"/alldetails/contact";
  
    return (
      <div>
       <h2>All Details </h2>
      
       <Row className="show-grid">
       <Col xs={12} md={8}>
       <ListGroup>
       	<ListGroupItem header='Price:'>{realestOBJ.actions.action[1].price} EUR/month</ListGroupItem>
       	<ListGroupItem header='Address:'>{realestOBJ.street}, {realestOBJ.city} {realestOBJ.country}</ListGroupItem>
       </ListGroup>
       </Col>
       <Col xs={12} md={4}>
       
       	<p><Link to={contactlink}><Button bsStyle="danger" bsSize="large">Contact as</Button></Link></p>
       	
       </Col>
       
       </Row>
               
       {this.props.children }
      </div>
    )
  }

}

module.exports = AllDetails