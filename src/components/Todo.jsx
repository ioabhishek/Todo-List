import { useState } from "react";
import Tasks from "./Tasks";
import { nanoid } from "nanoid";

const Todo = () => {
  const [tasks, setTasks] = useState({id:"", task:""});
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setTasks((prev) => {
      return {...prev, [name]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {...tasks, id:nanoid()}
    setTaskList((prev) => [...prev, newList])
    setTasks({...tasks, task:""})
  };

  const handleEdit = (id) => {
    setEditId(id);
  }

  const handleUpdate = (id, field, value) => {
    const updatedList = taskList.map((item) => (
      item.id === id ? {...item, [field]: value} : item
    ))
    setTaskList(updatedList);
  } 

  const handleDelete = (index) => {
    const newList = [...taskList];
    newList.splice(index, 1)
    setTaskList(newList);
  };

  return (
    <div className="w-2/5 pt-20">
      <form onSubmit={handleSubmit} className="flex items-center mb-8">
        <input
          type="text"
          placeholder="Add Todo"
          className="w-full border-solid border border-black p-1.5 mr-1.5 rounded-md indent-1"
          value={tasks.task}
          name="task"
          onChange={handleChange}
        />
        <button className="p-1.5 px-6 rounded-lg bg-slate-800 text-white">
          Add
        </button>
      </form>
      <Tasks taskList={taskList} handleEdit={handleEdit} handleDelete={handleDelete} handleUpdate={handleUpdate} editId={editId} setEditId={setEditId}/>
    </div>
  );
};

export default Todo;