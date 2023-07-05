import  { useState } from 'react';
import "./studentform.css"

const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [marks, setMarks] = useState('');
  const [school, setSchool] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();


    if(name == "" || age == "" || marks == "" || school == ""){
        alert("Please fill all fields");
    }
    else {
        const newStudent = {
            name: name,
            age: age,
            marks: marks,
            school: school,
          };
      
          setStudents([...students, newStudent]);
       
          setName('');
          setAge('');
          setMarks('');
          setSchool('');
    }
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="Age">Age</label>
        <input
          type="text"
          className="ageinput"
          placeholder="enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />

        <label htmlFor="Marks">Marks</label>
        <input
          type="text"
          placeholder="enter your marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <br />

        <label htmlFor="School">School</label>
        <input
          type="text"
          placeholder="enter your marks"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

  <table>

    <thead>
      <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Marks</th>
      <th>School</th>
      </tr>
    </thead>

    <tbody>
    {
      students.map((student, ind) => {
        return(
          <tr key={ind}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.marks}</td>
            <td>{student.school}</td>
          </tr>
        )
      })
    }
       </tbody>
      </table>
    </div>
  );
};

export default StudentForm;
