import "./App.css";
import { ReactEditor, HtmlCssJs } from "./pages/indexPages";
import { NavBar } from "./components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*poner header o slider cosa que se pueda ver en todas las paginas*/}
        <NavBar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/webDev" element={<HtmlCssJs />} />
          <Route path="/react" element={<ReactEditor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
