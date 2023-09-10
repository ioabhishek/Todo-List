const Tasks = ({
  taskList,
  handleEdit,
  handleDelete,
  handleUpdate,
  editId,
  setEditId,
}) => {
  return (
    <ul>
        {taskList.map((data, index) => (
          <li
              key={data.id}
              className="flex items-center justify-between mb-2 p-1.5 border border-orange-700 rounded-lg">
              {editId === data.id ? (
                <input
                    type="text"
                    value={data.task}
                    onChange={(e) =>
                      handleUpdate(data.id, "task", e.target.value)
                    }
                    className="border"
                />
              ) : (
                data.task
              )}
              <div>
                {editId === data.id ? (
                    <button
                      onClick={() => setEditId(null)}
                      className="p-1 px-3 mr-2 rounded-lg bg-slate-800 text-white">
                      Save
                    </button>
                ) : (
                    <button
                      onClick={() => handleEdit(data.id)}
                      className="p-1 px-3 mr-2 rounded-lg bg-slate-800 text-white">
                      Edit
                    </button>
                )}
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
