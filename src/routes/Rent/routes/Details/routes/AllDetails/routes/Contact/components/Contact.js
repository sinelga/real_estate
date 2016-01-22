import React from 'react'
import { Link } from 'react-router'
import { Modal,Button,Input} from 'react-bootstrap'


class Contact extends React.Component {
	
	constructor(props){
    super(props);
    this.state = {
    	showModal: false
    	
    }
    this.close =this.close.bind(this)
  }
	
		
	 close(){
		    this.setState({ showModal: false });
		 	
	}
	
	 componentWillUnmoun(){
		 
		 console.log("Contact   componentWillUnmount")
		 
	 } 
	 
	 componentWillMoun(){
		 
		 console.log("ModalShowAllImg  componentWillMount")
		 
	 } 	 
	 
	 
	componentDidMount(){

		this.setState({ showModal: true });
		
		   
	}
	componentWillReceiveProps(){
		this.setState({ showModal: true });
	}
	
	
  render() {
	  
	  var realestOBJ = REAL_ESTATE_OBJS[this.props.params.id]
	  var modallink = "/rent/details/"+this.props.params.id+"/modal";
//	  var images = [];
//	
//		for (var i = 0; i <  realestOBJ.actions.action[1].images.image.length; i++) {
//			images.push(<CarouselItem key={`${i}`}><img width={900} height={500} alt="900x500" src={`/images/${realestOBJ.id}/karusel/${i}.jpg`}/></CarouselItem>);
//		}
	  	  	  
    return (
      <div>
           
        <Modal show={this.state.showModal} onHide={this.close}> 
               
          <Modal.Header>
            <Modal.Title>ref:{realestOBJ.name} {realestOBJ.total_area}m²  {realestOBJ.city}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          	<form>
          		<Input type="text" label="Name" placeholder="Enter Name" />
          		<Input type="email" label="Email Address" placeholder="Enter email" />	
          		<Input type="text" label="Phone" placeholder="Enter Phone" />
          		<Input type="textarea" label="Message" placeholder="Message" />
          			
          	</form>

                               
          </Modal.Body>

          <Modal.Footer>
          	<Button bsStyle="primary">Save changes</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

        
        </Modal>
               

      </div>
    )
  }

}

module.exports = Contact