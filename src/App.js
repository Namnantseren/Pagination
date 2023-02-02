import './App.css';
import Pagination from "./pagination/Pagination"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page" element=""/>
      </Routes>

      <Pagination/>
    </div>
  );
}

export default App;
