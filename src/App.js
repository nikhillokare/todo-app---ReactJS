import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (index) => {
    const updatedText = prompt("Enter the updated task text:");
    if (updatedText !== null) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: updatedText } : task
      );
      setTasks(updatedTasks);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <div className="App">
        <h1>ToDo App</h1>
        <div className="task-form">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={task.id}>
              <span className="task-number">{index + 1}.</span>
              {task.text}
              <div className="button-group">
                <button onClick={() => updateTask(index)}>Update</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
