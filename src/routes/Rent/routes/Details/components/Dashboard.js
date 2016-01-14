import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
	
	componentDidMount(){
		
		console.log("mount Dashboard ")
		   
	}
	componentWillReceiveProps(){
		console.log(" Rent Dashboard receive props")
		console.log(this.props)
	}
	
  render() {
	  
	  var apartment = REAL_ESTATE_OBJS[this.props.params.id]
	  
		var images = [];
	
		for (var i = 0; i <  apartment.imagesnumber; i++) {

			images.push(<li key={`${i}`}><img className='aparimg' src={`/images/${apartment.id}/${i}.jpg`}></img></li>);

		}
	  
    return (
      <div>
        <h2>Details</h2>
        {images}
        <Link to="/rent/details/modal">Details</Link>
        {this.props.children }
      </div>
    )
  }

}

module.exports = Dashboard