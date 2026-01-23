const Header = ({course}) => {
  return(<h2>{course.name}</h2>)
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({parts}) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <b>total of {total} exercises </b>
  )
}

// show content of one course
const Content = ({course}) => {
  return (
    <div>
      <Header course = {course}/>
      {course.parts.map((part) => 
        <Part key = {part.id} part = {part}/>
      )}
      <Total parts={course.parts}/>
    </div>
  )
}

const Course = ({courses}) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <Content key={course.id} course = {course}/>
        )
      })}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App