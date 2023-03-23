import './App.css';

// App compoenents
import Header from './components/header.js';
import Footer from './components/footer.js';
import Task from "./components/task.js";
import { useState } from 'react';


export default function App() {
  // load local storage if is empty
  if (localStorage.getItem('tasks') == null) {
    localStorage.setItem('tasks', JSON.stringify([
        {'title': "Idée", 'isChecked': true},
        {'title': "Marché", 'isChecked': false},
        {'title': "Wireframe", 'isChecked': true},
        {'title': "Design", 'isChecked': true},
        {'title': "Landingpage", 'isChecked': false},
        {'title': "Développement", 'isChecked': false},
        {'title': "Publish", 'isChecked': false},
        {'title': "Pub", 'isChecked': true},
        {'title': "Feedback", 'isChecked': false}
    ]));
  }

  // state
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));

  const [tasksFilter, setTasksFilter] = useState("");


  // actions
  const tasksDisplay = tasks.filter(element => element.title.toUpperCase().includes(tasksFilter));


  // render
  return (
    <div id='home-screen'>
      <Header
        tasks={tasks}
      />

      <main>
        {tasksDisplay.map((item, index) => <Task
                                        key={index}
                                        title={item.title}
                                        isChecked={item.isChecked}
                                        position={index}
                                        tasks={tasks}
                                        setTasks={setTasks}
                                    />)}
      </main>

      <Footer
        tasks={tasks}
        setTasks={setTasks}
        setTasksFilter={setTasksFilter}
      />
    </div>
  );
}
