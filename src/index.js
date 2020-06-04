import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let exersiceData = {
  total: 50,
  powder: 20,
  goal: 10,
  backcountry: 10
}
class SkiDayCounter extends Component {
  getPercent = decimal=> {
    return decimal * 100 + '%'
  }

  getTotal = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render() {
    const {total, powder, goal, backcountry} = this.props
    return ( 
     <section>
       <div> 
         <p>Total Days: {total}</p>
         </div>
         <div> 
         <p>Total Powder: {powder}</p>
         </div>
         <div> 
         <p> goal progress: {this.getTotal(total, goal)}</p>
         </div>
         <div> 
         <p>Total backcountry: {backcountry}</p>
         </div>
     </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
  total={exersiceData.total}
  powder={exersiceData.powder}
  goal={exersiceData.goal} />,
  document.getElementById('root')
)