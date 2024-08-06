import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { IChapter } from '../interfaces';
import getApiCall from './axiosServices';

//This components is used to display all the chapters of a book
/**
 * Renders the chapters of a book based on the provided book ID.
 *
 * @return {JSX.Element} The rendered chapters of the book.
 */
const Book: React.FC = () => {
  const { id } = useParams();
  const [chapters, setChapters] = useState<IChapter[]>([]);
  const fetchChapters = async () => {
    try {
      const url = `https://api.potterdb.com/v1/books/${id}/chapters`;
      const bookData = await getApiCall(url);
      setChapters(bookData?.data?.data);
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchChapters();
      // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div>Chapters</div>
      <div>
        {chapters.map((chapter) => (
          <div key={uuidv4()}> 
            <Link key={uuidv4()} to={`/book/${id}/chapter/${chapter.id}`}>{chapter.attributes.title}</Link>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Book;