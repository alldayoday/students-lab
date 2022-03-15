import Student from "./Student"


function StudentList(props) {
  return (
    <>
    <h1>Students:</h1>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {props.students.map(student => 
        <Student key={student.name} student={student}/>      
      )}
    </div>
    </>
  )
}

export default StudentList