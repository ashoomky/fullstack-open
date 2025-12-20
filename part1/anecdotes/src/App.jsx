import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick = {props.onClick}>{props.text}</button>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const votes = new Array(8).fill(0);
  const [points, setPoints] = useState(new Array(8).fill(0))
  const Random = () => {
    setSelected(Math.floor(Math.random() * (7 - 0 + 1)))
  }

  const handleVote = () =>{
    // put the copy of the array here so it makes a copy of the original, and the increment peresists.
    const copyVotes = [...points]
    copyVotes[selected] += 1
    setPoints(copyVotes)
    
  }

  // we make copies of the original arrays when doing calculations/displaying to website because it is asynchronous, in doing so we ensure that updates are displayed with no delays.
  const maxVotes = Math.max(...points)
  const maxIndex = points.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <div>
        <Button onClick={handleVote} text = "vote"/>
        <Button onClick={Random} text="next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      {Math.max(...points) == 0 ? "No votes have been made" : anecdotes[maxIndex]}
      <p>has {maxVotes} votes</p>
   </div>
  )
}

export default App