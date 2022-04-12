import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import UserDetails from "./Components/UserDetails";
import UserForm from "./Components/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="/add-user" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
