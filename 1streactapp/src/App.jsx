import Home from "./Home.jsx";
import Dashboard from "./Dashboard.jsx";
import Event from "./Event.jsx";
import Counter from "./Counter.jsx";
import Sum from "./Sum.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Hello.css";

function App() {
  return (
    <>
      <h1>Application</h1>
      <br />
      <br />
      <Router>
        <Link to="/Home">Home</Link> <br />
        <Link to="/Event">Event Demo</Link> <br />
        <Link to="/Counter">Counter</Link> <br />
        <Link to="/Dashboard">Dashboard</Link> <br />
        <Link to="/Sum">Sum</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Event" element={<Event />}></Route>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path="/Sum" element={<Sum />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
