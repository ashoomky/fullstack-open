import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const total = good + bad + neutral 
  const average = total > 0 ? (good - bad) / total : 0
  const positive = total > 0 ? good / total * 100 : 0

  if (total === 0){
    return(
      <p>No feedback given</p>
    )
  }
  
  return(
    <table>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text = "all" value = {total} />
        <StatisticLine text = "average" value = {average} />
        <StatisticLine text = "positive" value = {positive}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {() => {setGood(good+1)}} text = "good"/>
      <Button onClick = {() => {setNeutral(neutral+1)}} text = "neutral"/>
      <Button onClick = {() => {setBad(bad+1)}} text = "bad"/>
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      
    </div>
  )
}

export default App