import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Course from "./pages/Course";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
