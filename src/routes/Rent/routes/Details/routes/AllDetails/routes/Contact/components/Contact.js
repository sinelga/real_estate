import React from 'react'
import { Link } from 'react-router'
import { Modal,Button,Input} from 'react-bootstrap'
import Rebase from 're-base';


var base = Rebase.createClass('https://apartreact.firebaseio.com');


class Contact extends React.Component {
	
	constructor(props){
    super(props);
    this.state = {
    	showModal: false,
    	name: '',
    	email: '',
    	phone: '',
    	message:'',
    	contacts: []
    	    	
    }
    this.close =this.close.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
	
	 handleSubmit(e) {
		    e.preventDefault();
		    var name = this.state.name.trim();
		    var email = this.state.email.trim();
		    var phone = this.state.phone.trim();
		    var message = this.state.message.trim();
		    
		    console.log(this.state.contacts); 
		    
		    if ((!name && !email) || (!name && !phone)) {
		        return;
		     } else {

		    	 this.close();
		    	 var pathname = this.props.location.pathname
		    	 var now = new Date();
		    	 base.post('clients', {
		    	      data: this.state.contacts.concat([{
		    	        date: now.toLocaleString(),
//		    	    	date: now. getTime(), 
		    	    	path: pathname,
		    	    	name: name,
		    	        email: email,
		    	        phone: phone,
		    	        message: message
		    	      }]),
		    	      context: this,
		    	      /*
		    	       * This 'then' method will run after the
		    	       * post has finished.
		    	       */
		    	      then: () => {
		    	        console.log('POSTED');
		    	        this.setState({name: '', email: '',phone: '',message: ''});
		    	        
		    	      }
		    	    });
		    	 			    	 		    	 
		     }

		  }
	
	
	handleNameChange(e) {
		    this.setState({name: e.target.value});
	}

	handleEmailChange(e) {
	    this.setState({email: e.target.value});
	}
	handlePhoneChange(e) {
	    this.setState({phone: e.target.value});
	}
	handleMessageChange(e) {
		this.setState({message: e.target.value});
	}
	
	 close(){
		 this.setState({ showModal: false });
		 	
	}
	 
	 componentWillUnmoun(){
		 
		 console.log("Contact   componentWillUnmount")
		 
	 } 
	 
	 componentWillMoun(){
		 
		 console.log("contact  componentWillMount");

		 
	 }
	 
	 componentWillUnmount(){
		 console.log("contact componentWillUnmount")
		 base.removeBinding(this.ref)
	 }
		 
	componentDidMount(){
		
		console.log("contact componentDidMount",this.props.location)
		this.setState({ showModal: true });

		this.ref = base.bindToState('clients', {
		      context: this,
		      state: 'contacts',
		      asArray: true
		    });
		
		   
	}
	componentWillReceiveProps(){
		this.setState({ showModal: true });
	}
	
	
  render() {
	  
	  var realestOBJ = REAL_ESTATE_OBJS[this.props.params.id]
	  var modallink = "/rent/details/"+this.props.params.id+"/modal";
	  	  	  
    return (
      <div>
           
        <Modal show={this.state.showModal} onHide={this.close}> 
               
          <Modal.Header>
            <Modal.Title>ref:{realestOBJ.name} {realestOBJ.total_area}m²  {realestOBJ.city}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          	<form onSubmit={this.handleSubmit}>
          		<Input type="text" label="Name" placeholder="Enter Name" value={this.state.name}  onChange={this.handleNameChange} />
          		<Input type="email" label="Email Address" placeholder="Enter email" value={this.state.email}  onChange={this.handleEmailChange} />	
          		<Input type="text" label="Phone" placeholder="Enter Phone" value={this.state.phone}  onChange={this.handlePhoneChange} />
          		<Input type="textarea" label="Message" placeholder="Message" value={this.state.message}  onChange={this.handleMessageChange} />
          			
          	</form>

                               
          </Modal.Body>

          <Modal.Footer>
          	<Button bsStyle="primary" onClick={this.handleSubmit}>Save changes</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        
        </Modal>
               

      </div>
    )
  }

}

module.exports = Contact