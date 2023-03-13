
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.component'
import StartPage from './Routes/StartPage/StartPage.component';
import DesignPage from './Routes/DesignPage/DesignPage.component'
import ParticipantPage from "./Routes/ParticipantPage/ParticipantPage.component";
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <StartPage/> */}
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<StartPage/>}/>
          <Route path="design" element={<DesignPage/>}/>
          <Route path="participants" element={<ParticipantPage/>}/>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
