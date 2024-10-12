import { useState } from "react";

function ToDoListe() {
  const [tasksListe, setTasksListe] = useState([
    { text: "Waking up at 5", completed: false },
    { text: "Praying", completed: false },
    { text: "Studying 2h", completed: false },
  ]);

  const [newTask, setNewTask] = useState(""); // State for the new task input

  const handlerAddTask = () => {
    if (newTask.trim() === "") return; // Prevent empty task
    setTasksListe((t) => [...t, { text: newTask, completed: false }]); // Add new task
    setNewTask(""); // Clear the input field
  };

  const handlerDeletTask = (index, e) => {
    e.stopPropagation();
    setTasksListe(tasksListe.filter((_, i) => index !== i));
  };

  const handleTaskUp = (index, e) => {
    e.stopPropagation();
    if (index === 0) return; // Prevent moving the first task up
    const updatedTasks = [...tasksListe];
    // Swap current task with the one above it
    [updatedTasks[index - 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index - 1],
    ];
    setTasksListe(updatedTasks);
  };

  const handleTaskDown = (index, e) => {
    e.stopPropagation();
    if (index === tasksListe.length - 1) return; // Prevent moving the last task down
    const updatedTasks = [...tasksListe];
    // Swap current task with the one below it
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasksListe(updatedTasks);
  };

  const handlerTaskCompleted = (index) => {
    const toggledTask = tasksListe.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasksListe(toggledTask);
  };

  return (
    <div className="to-do-container">
      <div className="input-section">
        <h2>Tasks to Complete</h2>
        <input
          type="text"
          value={newTask} // Set the input value to the newTask state
          onChange={(e) => setNewTask(e.target.value)} // Update newTask state on change
          placeholder="Add a new task..."
        />
        <button onClick={handlerAddTask}>Add Task</button>
      </div>

      <div className="listing-task">
        <ol>
          {tasksListe.map((task, index) => (
            <li
              key={index}
              onClick={() => handlerTaskCompleted(index)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
              <span className="buttons">
                <button onClick={(e) => handlerDeletTask(index, e)}>🚮</button>
                <button onClick={(e) => handleTaskUp(index, e)}>⬆️</button>
                <button onClick={(e) => handleTaskDown(index, e)}>⬇️</button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoListe;
/**function handlerAddTask() {
    const newTask = document.getElementById("task").value.trim(); // Remove spaces
    if (newTask === "") return; // Prevent adding empty tasks
    document.getElementById("task").value = "";
    setTasksListe((t) => [...t, { text: newTask, completed: false }]);
} */