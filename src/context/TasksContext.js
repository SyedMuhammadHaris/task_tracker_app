import { createContext, useReducer } from "react";

//Purpose of Creating This Context is to keep local State  sync with database
export const TasksContext = createContext();

export const taskReducer = (state,action)=>{
      switch (action.type) {
        case 'SET_TASKS':
            return {
                tasks: action.payload
            }
        case 'CREATE_TASK':
            return{
               tasks: [action.payload, ...state.tasks]
            }
        case 'DELETE_TASK':
            return {
               tasks: state.tasks.filter((t) => t._id !== action.payload._id)
            }
        default:
            return state
      }
}

export const TasksContextProvider = ({children})=>{  //means children is root app component of App
      
    const [state,dispatch] = useReducer(taskReducer,{
        tasks: null
    })
    return(
        //means All components have acess to TasksContext
        <TasksContext.Provider value={{...state,dispatch}}>  
          { children }
        </TasksContext.Provider>
    )
}



// to use this context we use (useContext hook) to invoke
// or we also create custom hook to use this context 