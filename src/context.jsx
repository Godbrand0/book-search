import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";
const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();

      const { docs } = data;
      console.log(docs);

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            title,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBooks);
        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Sea");
        }
      } else {
        setResultTitle("No Search Found");
        setBooks([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);
  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        resultTitle,
        setResultTitle,
        setSearchTerm,
        fetchBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
