import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    

    return (
      <div>
 
      	<Link to='/rent'><img src='images/forrent-sign.jpg' width='300'/></Link>
      	<Link to='/sale'><img src='images/forsale-sign.jpg'  width='300'/> </Link>  
                
      </div>
    )
  }
}

export default Dashboard
