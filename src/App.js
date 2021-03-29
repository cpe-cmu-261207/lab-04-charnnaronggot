import { useState } from "react";
import {CourseCard} from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({name:"",grd:"A",crd:"1"});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */

  function calculateGPA(cc) {
    // TODO
    var gpa = 0
    var credit  = 0 
    var cGpa = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          gpa = 4
          credit += Number(item.crd) 
          cGpa += gpa * Number(item.crd)
          break
        case 'B+' :
          gpa = 3.5
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'B' :
          gpa = 3
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'C+' :
          gpa = 2.5
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'C' :
          gpa = 2
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'D+' :
          gpa = 1.5
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'D' :
          gpa = 1
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
        case 'F' :
          gpa = 0
          credit += Number(item.crd)
          cGpa += gpa * Number(item.crd)
          break
      }  
    });
    setGPA(cGpa / credit) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log(inputData.name)
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
        <div class="inside">
          <p>Credits</p>
        <select class="a" onChange = { e => 
            setInputData({...inputData,crd: e.currentTarget.value}) 
          }>
          {credit.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
        </div>
        <div class="inside">
          <p>grade</p>     
        <select class="a" onChange = { e => 
           setInputData({...inputData,grd: e.currentTarget.value}) 
          }>
          {grade.map(item => {
            return <option value={item} >{item}</option>
          })}
        </select>
        </div>
        <div class="inside">
          <p>Subject</p>    
        <form onSubmit ={
          e => addCourse(e)}>
          <input type="text" onChange = { e => 
            setInputData({...inputData,name: e.currentTarget.value}) 
          }/>
            <button type="submit">+</button>
       </form>
       </div>
      </div>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
      <p>Your GPA is : {GPA}</p>
      </div>
    </div>
  );
}

export default App;