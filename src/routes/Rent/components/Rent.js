import React from 'react'
import { Link } from 'react-router'
import { Row,Col,Thumbnail } from 'react-bootstrap'
import ReactDOM from 'react-dom'

class Rent extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	allimages: true,
	    	selected: 0
	    	
	    }
	    
	  }
	
	componentWillMount(){
		console.log("WILL mount Rent")
		console.log(this.props.params)
	
	}	
	
	componentDidMount(){		
		console.log("mount Rent")
		
//		ReactDOM.findDOMNode(this.refs.startimages).style.display ='default';
		
		   
	}
	
	componentWillReceiveProps(){
		console.log(" Rent receive props")
		console.log(this.props.params)
		
		console.log("his.state.allimages",this.state.allimages)
		
		 if (this.state.allimages) {
			  ReactDOM.findDOMNode(this.refs.startimages).style.display = 'none';
			  this.state.allimages = false;
		  
		  } else {
			 
			  console.log("default?")
			  ReactDOM.findDOMNode(this.refs.startimages).style.display = '';
			  this.state.allimages = true;
			  
//			  this.forceUpdate();
		  }
//		this.state.allimages=false;
//		 ReactDOM.findDOMNode(this.refs.startimages).style.display ='default';
//		 this.forceUpdate();
//		this.state.selected=this.props.params.id;
	}
	
	componentDidUpdate(prevProps) {
//		  let selectNode = React.findDOMNode(this.refs.selectingComponent.refs.selectTag);
//		  selectNode.value = this.state.someValue;
		console.log(" componentDidUpdate()");
		console.log("prevProps",prevProps.params.id);
		console.log(this.props.params);
//		this.state.allimages=false;
//		  this.state.selected=this.props.params.id;
//		  this.forceUpdate();
//		  console.log(this.refs.startimages);
//		  let mountNode = ReactDom.findDOMNode(this.refs.startimages);
//		  let mountNode = ReactDOM.findDOMNode(this.refs.startimages);
		  
//		  console.log("style",ReactDOM.findDOMNode(this.refs.startimages).style);
//		console.
		
//		  if (this.state.allimages) {
//			  ReactDOM.findDOMNode(this.refs.startimages).style.display = 'none';
//			  this.state.allimages = false;
//		  
//		  } else {
//			  ReactDOM.findDOMNode(this.refs.startimages).style.display = 'default';
////			  this.forceUpdate();
//		  }
		  
//		  let unmount = ReactDOM.unmountComponentAtNode(mountNode);
			
		}
	
			
  render() {
	  var rentobjs = REAL_ESTATE_OBJS;
	  
	  var images = [];
	  
//	  if (this.state.allimages) {
	  for  (var i = 0; i <  rentobjs.length; i++) {

//		  images.push(<Grid key={`${i}`}><Row> <Link to={`/rent/details/${rentobjs[i].id}`}><Image className='aparimg' src={`/images/${rentobjs[i].id}/0.jpg`} rounded /></Link></Row><Row>{`${rentobjs[i].name}`}</Row></Grid>);
		  images.push(<Link key={`${i}`} to={`/rent/details/${rentobjs[i].id}`}><Thumbnail src={`/images/${rentobjs[i].id}/0.jpg`}><h4>{rentobjs[i].name}  {rentobjs[i].total_area}m²  {rentobjs[i].city}</h4><h3>Price: {rentobjs[i].actions.action[1].price} euro/month</h3> </Thumbnail></Link>);
	
	  }
//	  } else {
		  
//		  var i = this.state.selected;
//		  
//		  images.push(<Link key={`${i}`} to={`/rent/details/${rentobjs[i].id}`}><Thumbnail src={`/images/${rentobjs[i].id}/0.jpg`}><h4>{rentobjs[i].name}  {rentobjs[i].total_area}m²  {rentobjs[i].city}</h4><h3>Price: {rentobjs[i].actions.action[1].price} euro/month</h3> </Thumbnail></Link>);
//		  
		  
//	  } 

	  
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