import React from 'react'
import { Link } from 'react-router'
import { Modal,Button,Carousel,CarouselItem} from 'react-bootstrap'


const carouselInstance = (
		  <Carousel>
		    <CarouselItem>
		      <img width={900} height={500} alt="900x500" src="/images/0/0.jpg"/>
		      <div className="carousel-caption">
		        <h3>First slide label</h3>
		        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		      </div>
		    </CarouselItem>
		    <CarouselItem>
		      <img width={900} height={500} alt="900x500" src="/images/0/1.jpg"/>
		      <div className="carousel-caption">
		        <h3>Second slide label</h3>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		      </div>
		    </CarouselItem>
		    <CarouselItem>
		      <img width={900} height={500} alt="900x500" src="/images/0/2.jpg"/>
		      <div className="carousel-caption">
		        <h3>Third slide label</h3>
		        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		      </div>
		    </CarouselItem>
		  </Carousel>
		);


class ModalShowAllImg extends React.Component {
	
	constructor(props){
    super(props);
    this.state = {
    	showModal: false
    	
    }
    this.close =this.close.bind(this)
  }
	
		
	 close(){
		 	console.log("close")
		    this.setState({ showModal: false });
		 	
	}
		
	componentDidMount(){
		
		console.log("mount Modal ")
		console.log(this.props)
		this.setState({ showModal: true });
		
		   
	}
	componentWillReceiveProps(){
		console.log("Modal receive props")
		console.log(this.props)
		this.setState({ showModal: true });
	}
	
	
  render() {
	  
	  
    return (
      <div>
        <h2>All Images</h2>
           
        <Modal show={this.state.showModal} onHide={this.close}> 
        
       
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {carouselInstance}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        
        </Modal>
        
        
      
        

      </div>
    )
  }

}

module.exports = ModalShowAllImg