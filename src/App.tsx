import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';
import Chapter from './components/chapter';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Books/>}></Route>
    <Route path='/book/:id/chapter' element={<Book/>}></Route>
    <Route path='/book/:bookId/chapter/:chapterId' element={<Chapter/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
