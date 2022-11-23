import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";

function App() {
  const [toDo, setToDo] = useState(() => {
    const storeToDo = JSON.parse(localStorage.getItem("tasks"));
    return storeToDo ?? [];
  });

  // temp state
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add task
  const addTask = () => {
    if (newTask) {
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var date =
        "Day: " +
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear() +
        "|| Time: " +
        time;
      let number = toDo.length + 1;
      let newEntry = { id: number, title: newTask, day: date, status: false };
      setToDo(() => {
        const newToDo = [...toDo, newEntry];
        localStorage.setItem("tasks", JSON.stringify(newToDo));
        return newToDo;
      });

      setNewTask("");
    }
  };

  // Delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => {
      return task.id !== id;
    });
    localStorage.setItem("tasks", JSON.stringify(newTask));
    setToDo(newTask);
  };

  // Mark done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newTask));
    setToDo(newTask);
  };

  // cancelUpdate
  const cancelUpdate = () => {
    setUpdateData("");
  };
  // Update task
  const updateTask = () => {
    let filterRecords = toDo.filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(updatedObject));
    setToDo(updatedObject);
    setUpdateData("");
  };
  // change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      day: updateData.day,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  return (
    <div className="container App">
      <Router>
        <Header />
        <div className="container App">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  updateData={updateData}
                  changeTask={changeTask}
                  updateTask={updateTask}
                  cancelUpdate={cancelUpdate}
                  newTask={newTask}
                  setNewTask={setNewTask}
                  addTask={addTask}
                  toDo={toDo}
                  markDone={markDone}
                  setUpdateData={setUpdateData}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
