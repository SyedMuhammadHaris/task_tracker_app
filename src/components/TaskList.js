
const TaskList = ({task}) => {
  return (
    <div className="Task_List">
      <h4>{task.title}</h4>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Date: </strong> {task.createdAt}</p>
    </div>
  )
}

export default TaskList;