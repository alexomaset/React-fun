import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let exersiceData = {
  total: 50,
  powder: 20,
  goal: 10,
  backcountry: 10
}

const getPercent = decimal=> {
      return decimal * 100 + '%'
    }
  
const getTotal = (total, goal) => {
      return this.getPercent(total/goal)
    }

const SkiDayCounter =({total, powder, goal, backcountry}) => {
  return (
    <section>
    <div> 
      <p>Total Days: {total}</p>
      </div>
      <div> 
      <p>Total Powder: {powder}</p>
      </div>
      <div> 
      <p> goal progress: {getPercent(total, goal)}</p>
      </div>
      <div> 
      <p>Total backcountry: {backcountry}</p>
      </div>
  </section>
  )

}
 


ReactDOM.render(
  <SkiDayCounter
  total={exersiceData.total}
  powder={exersiceData.powder}
  goal={exersiceData.goal}
  backcountry={exersiceData.backcountry} />,
  document.getElementById('root')
)