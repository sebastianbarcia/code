import "./App.css";
import { ReactEditor, HtmlCssJs } from "./pages/indexPages";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*poner header o slider cosa que se pueda ver en todas las paginas*/}
        <Link to={"/react"}>hola</Link>
        <Routes>
          <Route path="/" element={<HtmlCssJs />} />
          <Route path="/react" element={<ReactEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
