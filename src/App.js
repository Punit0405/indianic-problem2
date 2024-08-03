import './App.css';
import  { Route, Routes,BrowserRouter } from 'react-router-dom'
import Chapter from './components/Chapter';
import Books from './components/Books';
import Book from './components/Book';
function App() {
  // Here is the basic routing setup of the project. we can use the react-router-dom library to do this
  //here we are having home page , chapters page and a chapter summary page and we are using router params.
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Books />}></Route>
      <Route path='/book/:id/chapter' element={<Book />}></Route>
      <Route path='/book/:bookId/chapter/:chapterId' element={<Chapter />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
