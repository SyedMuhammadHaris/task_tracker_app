import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const [tasks,setTasks] = useState(null)

    useEffect(()=>{
        const fetchTasks = async ()=>{
          const response = await fetch('/api/tasks')
          const json = await response.json()
           if(response.ok){
              setTasks(json)
           }
        }
        
        fetchTasks();
    },[])
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