const Tasks = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
              {index + 1}. {task}
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="p-1 px-3 mr-2 rounded-lg bg-slate-800 text-white">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="p-1 px-3 rounded-lg bg-slate-800 text-white">
                  Delete
                </button>
              </div>
          </li>
        ))}
    </ul>
  );
};

export default Tasks;
