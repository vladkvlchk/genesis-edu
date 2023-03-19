import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";

const speed = {
  value: 1.0,
  slowly() {
    if (this.value > 0.2) {
      this.value = Math.round((this.value - 0.1) * 10) / 10;
    }
    console.log("slowly ", this.value);
  },
  faster() {
    if (this.value < 3) {
      this.value = Math.round((this.value + 0.1) * 10) / 10;
    }
    console.log("faster ", this.value);
  },
};

export const SpeedContext = React.createContext(speed);

function App() {

  const handleKeyPress = (event) => {
    if (event.key === "Z") {
      speed.slowly();
    } else if (event.key === "X") {
      speed.faster();
    }
  };

  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <SpeedContext.Provider value={speed}>
      <BrowserRouter>
        <div
          ref={ref}
          tabIndex={0}
          className={styles.app}
          onKeyDown={handleKeyPress}
        >
          <Routes>
            <Route path="/" element={<Courses />} />
            <Route path="/courses/:courseId" element={<Course />} />
            <Route path="/:notFound" element={<NotFound />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </SpeedContext.Provider>
  );
}

export default App;
