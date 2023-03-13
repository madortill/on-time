
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.component'
import StartPage from './Routes/StartPage/StartPage.component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <StartPage/> */}
      <Routes>
        <Route path="/home" element={<NavBar/>}>
          <Route path="start" element={<StartPage/>}/>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;
