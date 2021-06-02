import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import React from "react";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
