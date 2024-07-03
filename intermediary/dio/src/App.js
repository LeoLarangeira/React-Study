import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import {Feed} from "./pages/Feed"
import { Registration } from "./pages/Registration";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router> 
  );
}

export default App;
