import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/Feed"
import { Registration } from "./pages/Registration";
import { AuthContextProvider } from "./context/auth";


function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
