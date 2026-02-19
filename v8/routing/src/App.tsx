import {Header} from "./Layout/Header";
import {Routes, Route} from "react-router-dom";
import './App.css'


//importera sidorna
import {Pool} from "./Pages/Pool";

export const App = () => {
  return (
      <>
      <Header />
        <Routes>
          <Route path="/pool" element={<Pool />} />
        </Routes>
      </>
  )
};

export default App
