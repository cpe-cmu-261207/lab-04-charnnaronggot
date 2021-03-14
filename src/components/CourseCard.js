export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (<>
    <div class="CourseCard">
      <tr id="CC">
        <td>
          <div class="tag">
            <p>Subject : {props.subj}</p>
            <p>Grade : {props.grade}</p>
            <p>Credits : {props.credit}</p>
          </div>
        </td>
        <td>
          <button class="btn" onclick = {()=>{
            props.del(props.subj)
          }}>x</button>
        </td>
      </tr>
    </div>
    </>
  );
};