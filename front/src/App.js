import { useSelector } from 'react-redux';

import ToDoPage from './pages/Todo';
import Loader from './components/Loader';
import Errors from './components/Errors';

import './App.css';

function App() {
  const isLoader = useSelector((store) => store.isLoader);
  return (
    <div className="App">
      { isLoader && <Loader></Loader> }
     <ToDoPage />
     <Errors />
    </div>
  );
}

export default App;
