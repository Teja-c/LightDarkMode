// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onClickMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const lightModes = isLightMode ? 'darkMode' : 'lightMode'
    const buttonText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`bg-container-2 ${lightModes}`}>
          <h1>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
