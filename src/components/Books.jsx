import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

//This components is used to display all the books
/**
 * Renders a list of books fetched from the PotterDB API. 
 * The component fetches the books data from the API on mount and stores it in state.
 * The books data is then mapped to a list of book titles, each wrapped in a link to the book's chapters.
 *
 * @return {JSX.Element} A React component that renders a list of book titles.
 */

const Books = () => {

  const [books,setBooks] = useState([]);
  const fetchBooks = async ()=>{   
    try{
        const url = 'https://api.potterdb.com/v1/books';   
        const chaptersData = await axios.get(url);
        setBooks(chaptersData?.data?.data);
    }
    catch(e){
        console.log(e);
    }
  }
  useEffect(()=>{
    fetchBooks();
  // eslint-disable-next-line
  },[]);
  return (
    <div>
        <div>Books</div>
        <div>
            {books.map((book)=>(
                <div>
                <Link key={uuidv4()}  to={`/book/${book.id}/chapter`}>{book.attributes.title}</Link>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Books