import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor:'orange',
  color: 'white',
  fontFamily: 'Arial'
}

class Message extends React.Component {
  render() {
    return(
      <div>
        <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
        <p>Ill check back in {this.props.minutes} minutes
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="blue" msg="how are you?" minutes={5}/>,
  document.getElementById('root')
)