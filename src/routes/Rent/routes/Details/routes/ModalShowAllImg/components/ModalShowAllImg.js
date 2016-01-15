import React from 'react'
import { Link } from 'react-router'
import { Modal} from 'react-bootstrap'
import { Button } from 'react-bootstrap';

class ModalShowAllImg extends React.Component {
	
	constructor(props){
    super(props);
    this.state = {
    	showModal: true
    	
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
		   
	}
	componentWillReceiveProps(){
		console.log("Modal receive props")
		console.log(this.props)
	}

	
	
	
  render() {
	  

	  
    return (
      <div>
        <h2>All Images</h2>
		  <div className="static-modal">
		  <Modal show={this.state.showModal}>
	
	      <Modal.Header>
	        <Modal.Title>Modal title</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        One fine body...
	      </Modal.Body>

	      <Modal.Footer>
	        <Button onClick={this.close} >Close</Button>
	        <Button bsStyle="primary">Save changes</Button>
	      </Modal.Footer>

	    
	    </Modal>
	  </div>
        
        

        {this.props.children }
      </div>
    )
  }

}

module.exports = ModalShowAllImg