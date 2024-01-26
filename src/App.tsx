import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Team from "./components/Team";
import Project from "./components/Project";
import Home from "./components/Home";
import Calendar from "./components/Calendar";

function App() {
  return (
<>
<Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
       
      </MainLayout>
    </Router>

  
</>
  );
}

export default App;
