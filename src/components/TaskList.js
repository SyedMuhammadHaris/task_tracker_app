import {useTasksContext} from '../hooks/useTasksContext';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskList = ({task}) => {
  const {dispatch} = useTasksContext();
  

  // const handleUpdate = async ()=>{
  //       const response = await fetch('api/tasks/' + task._id,{
  //         method: 'PATCH',
  //         body : JSON.stringify(task),
  //         headers :{
  //         'Content-Type': 'application/json'
  //       }
  //       })
  // }
  const handleClick = async () => {
       const response = await fetch('api/tasks/'+ task._id,{
        method: 'DELETE'
       });
       const json = await response.json();
       if(response.ok){
        dispatch({type: 'DELETE_TASK', payload: json})
       }
  }
  return (
    <div className="Task_List">
      <h4>{task.title}</h4>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Date: </strong>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      
      <span className="material-symbols-outlined delete" onClick={handleClick}>delete</span>
      {/* <button onClick={handleUpdate}> Update </button> */}
      {/* <input type="checkbox" name="completed"/> */}
    </div>
  )
}

export default TaskList;