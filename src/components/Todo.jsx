import { useState } from "react";
import Tasks from "./Tasks";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleEdit = (index) => {
    console.log('Edit me' + index)
  }

  const handleDelete = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
  };

  return (
    <>
        <form onSubmit={handleSubmit} className="flex items-center mb-8">
          <input
              type="text"
              placeholder="Add Todo"
              className="w-full border-solid border border-black p-1.5 mr-1.5 rounded-md indent-1"
              value={input}
              onChange={handleChange}
          />
          <button className="p-1.5 px-6 rounded-lg bg-slate-800 text-white">
              Add
          </button>
        </form>
        <Tasks tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
    </>
  );
};

export default Todo;