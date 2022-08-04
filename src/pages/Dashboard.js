import { useEffect } from "react";
import {useTasksContext} from '../hooks/useTasksContext';
import TaskForm from "../components/TaskForm";
import TaskList from '../components/TaskList';

const Dashboard = () => {
    // const [tasks,setTasks] = useState(null)
      const {tasks,dispatch} = useTasksContext();

    useEffect(()=>{
        const fetchTasks = async ()=>{
          const response = await fetch('/api/tasks')
          const json = await response.json()
           if(response.ok){
            //   setTasks(json)

            dispatch({type:'SET_TASKS',payload:json})
           }
        }
        
        fetchTasks();
    },[dispatch])
  return (
     <div className="home">
        {/* <h2>Home</h2> */}
        <div className="tasks">
        {tasks && tasks.map((task)=>{
            return(
                <TaskList key={task._id} task={task}/>     
            )
        })}
        </div>
        <TaskForm />
     </div>
  )
}

export default Dashboard;