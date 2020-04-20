import React, { Component } from "react";
import { render } from "react-dom";

const Book = ({ title, author, pages }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p> By: {author}</p>
      <p> Pages: {pages}</p>
    </div>
  );
};

const Library = () => {
  return (
    <div>
      <Book title="The Ugly Truth" author="Minisha Augustine" pages={250}></Book>
      <Book title="The Ugly Truth 2" author="Minisha Augustine" pages={250}></Book>
      <Book title="The Ugly Truth 3" author="Minisha Augustine" pages={250}></Book>
    </div>
  );
};
render(
  <Library />, 
  document.getElementById("root")
  );
