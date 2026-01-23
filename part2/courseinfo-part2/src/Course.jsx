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
export default Course;