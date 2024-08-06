import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import getApiCall from './axiosServices';

//This components is used to display all the chapters of a book
/**
 * Renders the chapter summary and title based on the provided book and chapter IDs.
 *
 * @return {JSX.Element} The rendered chapter summary and title.
 */

const Chapter:React.FC = () => {
  const { bookId, chapterId } = useParams();
  const [chapterSummary, setChapterSummary] = useState<string>("");
  const [chapterTitle, setChapterTitle] = useState<string>("");
  const fetchChapter = async () => {
    try {
      const url = `https://api.potterdb.com/v1/books/${bookId}/chapters/${chapterId}`;
      const chapterData = await getApiCall(url);
      if (chapterData?.data?.data.attributes.summary) {
        setChapterSummary(chapterData?.data?.data.attributes.summary);
      } else {
        setChapterSummary("No Summary Available");
      }
      setChapterTitle(chapterData?.data?.data.attributes.title);
    }
    catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchChapter();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div>Chapter Summary</div>
      <div>
        <div>
          <h1>{chapterTitle}</h1>
        </div>
        {chapterSummary}
      </div>

    </div>
  )
}

export default Chapter