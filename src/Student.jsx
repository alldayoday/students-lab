import Score from "./Score"

const Student = (props) => {
  return (
    <>
      <h3>
        {props.student.name}
      </h3>
      <div>{props.student.bio}</div>
      {props.student.scores.map(score => <Score key={score} score={score}/>)}
    </>
  )
}

export default Student