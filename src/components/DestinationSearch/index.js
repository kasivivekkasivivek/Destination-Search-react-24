// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    inputSearch: '',
  }

  onChangeInputContent = event => {
    this.setState({inputSearch: event.target.value})
  }

  render() {
    const {inputSearch} = this.state
    console.log(inputSearch)
    const {initialDestinationsList} = this.props
    const searchResult = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="destination-heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="input-element"
              value={inputSearch}
              onChange={this.onChangeInputContent}
            />
            <img
              className="search-image"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            />
          </div>
        </div>
        <ul className="locations-container">
          {searchResult.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationInfo={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
