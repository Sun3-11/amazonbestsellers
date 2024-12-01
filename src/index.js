import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Books } from "./books";
import Book from "./Book";
const BookList = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="BookList">
        {Books.map((book, index) => {
          console.log(book);
          const { img, Title, author, id } = book;
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
