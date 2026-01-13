const Header = ({course}) => {
  return(
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, i) => <Part key={i} part = {part}/>)}
    </div>
  )
}

const Total = ({parts}) => {
  let total = 0
  parts.forEach(part => {
    total += part.exercises
  })
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
          name: 'Redux',
          exercises: 11,
          id: 4
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App