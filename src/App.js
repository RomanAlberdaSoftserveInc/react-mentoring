import { Routes, Route, Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Lesson1 from "./Lessons/Lesson1";
import Lesson2 from "./Lessons/Lesson2";
import Lesson3 from "./Lessons/Lesson3";

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
      </ListGroup>

      <div>
        <Routes>
          <Route path="/lesson1" element={<Lesson1 />} />
          <Route path="/lesson2" element={<Lesson2 />} />
          <Route path="/lesson3" element={<Lesson3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
