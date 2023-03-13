import './App.css';

// App compoenents
import Header from './components/header.js';


function App() {
  return (
    <Header
      tasksValidate={3}
      tasksCount={7}
    />
  );
}

export default App;
