// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  // Function to handle changes in the search input
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  // Function to update the search input with the clicked suggestion
  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    // Filter suggestions based on search input (case-insensitive)
    const filteredSuggestions = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="search-container">
         <img
  src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
  alt="search icon"  // Corrected alt attribute
  className="google-logo"
/>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />

            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="suggestions-list">
            {filteredSuggestions.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id} // Unique key for each item
                suggestion={eachSuggestion.suggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
