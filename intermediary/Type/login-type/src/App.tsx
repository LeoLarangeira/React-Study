import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link
  } from "react-router-dom";
import Login from "./pages/Login";


function App() {
    return(
        <Router>
            <Routes> 
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}


