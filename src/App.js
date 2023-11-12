import logo from './logo.svg';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content'>
        {/* App content/\ */}
        <Outlet>
        </Outlet>
      </div>
    </div>
  );
}

export default App;
