import Student from "./Student"


function StudentList(props) {
  return (
    <div>
      {props.students.map(student => 
        <Student key={student.name} student={student}/>      
      )}
    </div>
  )
}

export default StudentList