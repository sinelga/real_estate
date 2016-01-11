import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    const { real_estate_objs } = this.props

    return (
      <div>
        <h2>Aparments for rent</h2>
        <p>
 
        </p>
        <h2>List offers</h2>
        <ul>
        { real_estate_objs.map(real_estate_obj => (
                <li key={real_estate_obj.id}>
               
                  <Link to={`/${real_estate_obj.type}/${real_estate_obj.id}`}><img width='200' src={`/images/${real_estate_obj.id}/0.jpg`}>{real_estate_obj.name}</img></Link>
                </li>
              ))}
        </ul>
      </div>
    )
  }
}

export default Dashboard
