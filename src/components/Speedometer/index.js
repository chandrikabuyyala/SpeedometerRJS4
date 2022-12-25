// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onClickBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="mainHead">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="mainHead">
          Speed is <spam>{speed}</spam>mph
        </h1>
        <p className="para">Min limit is 0mph, Max limit is 200mph</p>
        <div className="buttonContainer">
          <button
            type="button"
            className="AcceBtn"
            onClick={this.onClickAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="breakBtn"
            onClick={this.onClickBreak}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
