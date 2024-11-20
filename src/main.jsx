import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Book from "./pages/Booklist/Book";
import BookDetails from "./pages/BookDetails/BookDetails";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="book" element={Book} />
        <Route path="book/:id" element={BookDetails} />
      </Route>
    </Routes>
  </BrowserRouter>
);
