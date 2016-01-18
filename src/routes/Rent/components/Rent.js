import React from 'react'
import { Link } from 'react-router'
import { Row,Col,Thumbnail } from 'react-bootstrap'
import ReactDOM from 'react-dom'

class Rent extends React.Component {

//	constructor(props){
//	    super(props);
//	    this.state = {
//	    	allimages: true,
//	    	selected: 0	    	
//	    }
//	    this. toggledisplay=this.toggledisplay.bind(this)	
//	  }
//	
//	
//	toggledisplay(allimages){
//		
//		console.log("default?",ReactDOM.findDOMNode(this.refs.startimages).style.display)
//		if (allimages){
//			
//			ReactDOM.findDOMNode(this.refs.startimages).style.display ='none'
//			this.state.allimages = false;	
//		} else {
//			ReactDOM.findDOMNode(this.refs.startimages).style.display =''
//			this.state.allimages = true;	
//			
//		}
//		
//	
//	}
	
	componentWillMount(){
//		console.log("WILL mount Rent")
//		console.log(this.props.params)
	
	
	}	
	
	componentDidMount(){		
		console.log("mount Rent")
//		ReactDOM.findDOMNode(this.refs.startimages).style.display = '';
		
//		ReactDOM.findDOMNode(this.refs.startimages).style.display ='default';
		
		   
	}
	
	componentWillReceiveProps(){
//		console.log(" Rent receive props")
//		console.log(this.props.route)
		
//		console.log(this.context.router)
		
//		console.log("his.state.allimages",this.state.allimages)
//		
//		this.toggledisplay(this.state.allimages);
		
//		 if (this.state.allimages) {
//			  ReactDOM.findDOMNode(this.refs.startimages).style.display = 'none';
//			  this.state.allimages = false;
//		  
//		  } else {
//			 
//			  console.log("default?",ReactDOM.findDOMNode(this.refs.startimages).style.display)
//			  ReactDOM.findDOMNode(this.refs.startimages).style.display = '';
//			  this.state.allimages = true;
//		  }
	}
	
	componentDidUpdate(prevProps) {
		
		if (this.props.params.id){
				
			ReactDOM.findDOMNode(this.refs.startimages).style.display ='none'
			
		} else {
			ReactDOM.findDOMNode(this.refs.startimages).style.display =''
		
		}
					
 }
	
			
  render() {
	  var rentobjs = REAL_ESTATE_OBJS;
	  
	  var images = [];

	  for  (var i = 0; i <  rentobjs.length; i++) {

//		  images.push(<Grid key={`${i}`}><Row> <Link to={`/rent/details/${rentobjs[i].id}`}><Image className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`} rounded /></Link></Row><Row>{`${rentobjs[i].name}`}</Row></Grid>);
		  images.push(<Link key={`${i}`} to={`/rent/details/${rentobjs[i].id}`}><Thumbnail src={`/images/${rentobjs[i].id}/0.jpg`}><h4>{rentobjs[i].name}  {rentobjs[i].total_area}m²  {rentobjs[i].city}</h4><h3>Price: {rentobjs[i].actions.action[1].price} euro/month</h3> </Thumbnail></Link>);
	
	  }

	  
    return (
      <div>
        <h2>Rent</h2>
                
        <Row className="show-grid">
        <Col ref='startimages'  xs={12} md={4}>{images}</Col>
        <Col xs={6} md={8}>{this.props.children}</Col>
      </Row> 
                     
        
      </div>
    )
  }

}

module.exports = Rent