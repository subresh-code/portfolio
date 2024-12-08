import Contact from "./pages/Home/Contact";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
    
  );
}

export default App;
