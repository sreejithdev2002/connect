import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import YourApplications from "./Pages/YourApplications";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SingleJobsPage from "./Pages/SingleJobsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/yourApplications" element={<YourApplications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job" element={<SingleJobsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
