export const AddTask = ({ tasklist, setTasklist }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: task,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTasklist([...tasklist, newTask]);
    event.target.task.value = "";
  };

  return (
    <div className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add Task" autoComplete="off" maxLength="25"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
