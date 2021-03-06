import { Routes, Route, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Lesson1 from "./Lessons/Lesson1";
import Lesson2 from "./Lessons/Lesson2";
import Lesson3 from "./Lessons/Lesson3";
import Lesson4 from "./Lessons/Lesson4";
import Lesson5 from "./Lessons/Lesson5";
import Lesson6 from "./Lessons/Lesson6";
import Lesson7 from "./Lessons/Lesson7";
import Lesson8 from "./Lessons/Lesson8";

// import styles from './file.css'
// className = styles["table"]

// (".table_cadsklakj12323");

// const className = "btn-red-size-1";
// const size = 1;
// const className = `btn-red-size-${size}`;

function App() {
  return (
    <div className="App">
      <div>Component</div>

      <ListGroup variant="flush">
        <ListGroup.Item action>
          <Link to="/">Головна</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson1">Урок1</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson2">Урок2</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson3">Урок3</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson4">Урок4</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson5">Урок5</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson6">Урок6</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson7">Урок7</Link>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Link to="/lesson8">Урок8</Link>
        </ListGroup.Item>
      </ListGroup>

      <div>
        <Routes>
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
          <Route path="/lesson4" element={<Lesson4 />} />
          <Route path="/lesson5" element={<Lesson5 />} />
          <Route path="/lesson6" element={<Lesson6 />} />
          <Route path="/lesson7" element={<Lesson7 />} />
          <Route path="/lesson8" element={<Lesson8 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
