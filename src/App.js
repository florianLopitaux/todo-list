import './App.css';

// App compoenents
import Header from './components/header.js';
import Footer from './components/footer.js';


function App() {
  return (
    <div id='home-screen'>
      <Header
        tasksValidate={3}
        tasksCount={7}
      />

      <Footer/>
    </div>
  );
}

export default App;
