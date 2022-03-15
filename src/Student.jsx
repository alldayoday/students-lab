import Score from "./Score"

const Student = (props) => {
  return (
    <div className="card">
      <h3 className="card-title">
        {props.student.name}
      </h3>
      <div className="card-body" >{props.student.bio}</div>
      {props.student.scores.map(score => <Score key={score} score={score}/>)}
      </div>
  )
}

export default Student