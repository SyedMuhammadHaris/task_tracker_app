import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";

export const useTasksContext = () => {
    const context = useContext(TasksContext);

    if(!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
      }
   
    return context;
}