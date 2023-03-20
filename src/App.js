import './App.css';

// App compoenents
import Header from './components/header.js';
import Footer from './components/footer.js';
import Task from "./components/task.js";
import { useState } from 'react';


export default function App() {
  // state
  const [tasks, setTasks] = useState([
      {'title': "1. Idée", 'isChecked': true},
      {'title': "2. Marché", 'isChecked': false},
      {'title': "3. Wireframe", 'isChecked': true},
      {'title': "4. Design", 'isChecked': true},
      {'title': "5. Landingpage", 'isChecked': false},
      {'title': "6. Développement", 'isChecked': false},
      {'title': "7. Publish", 'isChecked': false},
      {'title': "8. Pub", 'isChecked': true},
      {'title': "9. Feedback", 'isChecked': false},
  ]);

  const [tasksDisplay, setTasksDisplay] = useState(tasks.slice());


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
                                        setTasksDisplay={setTasksDisplay}
                                    />)}
      </main>

      <Footer
        tasks={tasks}
        setTasksDisplay={setTasksDisplay}
      />
    </div>
  );
}
