import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Abouts from './Pages/Abouts';
import Services from './Pages/Services';
import Portofolios from './Pages/Portofolios';
import Contacts from './Pages/Contacts';
import ProjectsPage from './Pages/ProjectsPage';
import LandingPages from './Pages/LandingPages';
import ToolsAndSkills from './Pages/ToolsAndSkills';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<Abouts />}></Route>
      <Route path='/service' element={<Services />}></Route>
      <Route path='/portofolio' element={<Portofolios />}></Route>
      <Route path='/contact' element={<Contacts />}></Route>
      <Route path='/website-portofolio' element={<ProjectsPage />}></Route>
      <Route path='/landingpage-portofolio' element={<LandingPages />}></Route>
      <Route path='/toolsandskills' element={<ToolsAndSkills />}></Route>
    </Routes>
  );
}

export default App;
