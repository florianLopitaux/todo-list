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
  

  // actions
  const computeTaskValidate = () => {
    let taskValidateCount = 0;

    tasks.forEach(element => {
      if (element.isChecked) {
        taskValidateCount++;
      }
    })

    return taskValidateCount;
  }

  const handleTaskCheckChange = (position) => {
      let newTasks = tasks.slice();
      newTasks[position].isChecked = !newTasks[position].isChecked;

      setTasks(newTasks);
  };

  const handleArrowClick = (position, moveVelocity) => {
      if (position + moveVelocity >= tasks.length || position + moveVelocity < 0) {
        return;
      }

      let newTasks = tasks.slice();
      
      // swap elements
      const tempTask = newTasks[position];
      newTasks[position] = newTasks[position + moveVelocity];
      newTasks[position + moveVelocity] = tempTask;

      setTasks(newTasks);
  }


  // render
  return (
    <div id='home-screen'>
      <Header
        tasksValidate={() => computeTaskValidate()}
        tasksCount={tasks.length}
      />

      <main>
        {tasks.map((item, index) => <Task
                                        key={index}
                                        title={item.title}
                                        isChecked={item.isChecked}
                                        handleTaskCheckChange={() => handleTaskCheckChange(index)}
                                        onArrowUpClick={() => handleArrowClick(index, -1)}
                                        onArrowDownClick={() => handleArrowClick(index, 1)}
                                    />)}
      </main>

      <Footer/>
    </div>
  );
}
