import './App.css';

// App compoenents
import Header from './components/header.js';
import Footer from './components/footer.js';
import TasksContainer from './components/tasksContainer.js';


function App() {
  return (
    <div id='home-screen'>
      <Header
        tasksValidate={3}
        tasksCount={7}
      />

      <TasksContainer/>

      <Footer/>
    </div>
  );
}

export default App;
