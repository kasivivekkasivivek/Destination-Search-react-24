// Write your code here
import './index.css'

import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationInfo} = this.props
    const {name, imgUrl} = destinationInfo
    return (
      <li className="destination-item">
        <img src={imgUrl} className="destination-image" alt="destination" />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
