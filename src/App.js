import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);                 
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(0.00);

  let name = ""
  let a = ""
  let g = 0
  let c = 0
  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
    let grade = 0.00
    let credit = 0
    course.forEach(obj => {
      if(Number(obj.grade) !== -1){
        grade += Number(obj.grade)*Number(obj.credit)
        credit += Number(obj.credit)
      }
    })
    grade = Number(grade)/Number(credit)
    if(Number(grade)>=0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(0.00)
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const course = {
      id: name,
      alplabet: a,
      grade: g,
      credit: c
    }
    const newCourse = [...myCourses,course]
    setMyCourse(newCourse)
    // recalculate GPA
    calculateGPA(newCourse);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
    const retain = nyCourse.filter(obj =>{
      return obj.id !==id
    })
    setMyCourse(retain)
    calculateGPA(retain);
  }

  return (
  <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(obj =>{
          const delBtn = document.createElement('button')
          delBtn.innerHTML = 'X'
          delBtn.onclick = () =>{
            onDeleteCourse(obj.id)
          }
          return <CourseCard subj={obj.id} grade = {obj.alplabet} credit = {obj.credit} del = {onDeleteCourse}/>
        })}
      </div>
      {/* TODO add course input form */}
      <form onSubmit = {e => {
        addCourse(e)
        document.getElementById("name").value =''
        document.getElementById("grade").selectedIndex = 0
        document.getElementById("w").selectedIndex = 0
      }}>
        <table id="form">
          <tr>
            <th>Subject name</th>
            <th>Grade</th>
            <th>credits</th>
          </tr>
          <tr>
            <td>
            <input id="name" type="text" placeholder="Subject name" onChange = {(e)=>{name = e.currentTarget.value}}/>
            </td>
            <td>
              <select id = "grade" onChange = {(e)=>{
                g = e.currentTarget.value
                a = e.currentTarget.options[e.currentTarget.selectedIndex].text
              }}>
                <option value = "-2"></option>
                {grade.map((item)=>{return <option value={item.val}>{item.key}</option>})}
              </select>
            </td>
            <td>
              <select id="w" onChange = {(e)=>{c = e.currentTarget.value}}>
                <option value = "0"></option>
                {credit.map((item)=>{return <option value = {item}>{item}</option>})}
              </select>
            </td>
            <td>
              <button type = "submit">Add</button>
            </td>
          </tr>
        </table>
      </form>
      {/* TODO display calculated GPA */}
      <h1 className="text -2x1 my-3">GPA :{GPA.toFixed(2)}</h1>
    </div>
  )
}

export default App;