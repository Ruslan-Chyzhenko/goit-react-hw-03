import ContactList from "../ContactList/ContactList";
import initialTasks from "../tasks.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "../App/App.module.css";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>PhoneBook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

// export default App;
