import { createContext, useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import toast from "react-hot-toast";
import axios from "axios";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookmarkListProvider({ children }) {
  const [currentBookmark, setCurrentBookmark] = useState(null);
  const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmark(id) {
    setIsLoadingCurrBookmark(true);
    setCurrentBookmark(null);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);

      setCurrentBookmark(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrBookmark(false);
    }
  }

  async function createBookmark(newBookmark) {
    setIsLoadingCurrBookmark(true);
    try {
      const { data } = await axios.post(`${BASE_URL}/bookmarks/`, newBookmark);
      setCurrentBookmark(data);
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoadingCurrBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        currentBookmark,
        getBookmark,
        isLoadingCurrBookmark,
        createBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}
