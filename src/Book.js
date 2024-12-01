import React from "react";

const Book = ({ img, Title, author, number }) => {
  console.log(number);

  return (
    <article className="Book">
      <img src={img} alt={Title}></img>
      <h2>{Title}</h2>
      {/* <button onClick={() => getBook(id)}>click me</button> */}
      <h4>{author}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
