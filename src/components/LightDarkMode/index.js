// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeBackground = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modernClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${modernClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.changeBackground}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
