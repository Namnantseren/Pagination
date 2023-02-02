import './App.css';
import Pagination from "./pagination/Pagination"
import { Route, Routes } from 'react-router-dom';
import Page from './pagination/subComponent/Page.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:id" element={<Page />}/>
      </Routes>
      <Pagination/>
    </div>
  );
}

export default App;
