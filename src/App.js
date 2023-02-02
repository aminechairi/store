import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AllCategores from "./pages/AllCategores/AllCategores";
import PageProdacts from "./pages/PageProdacts/PageProdacts";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/allcategores" element={ <AllCategores /> } />
        <Route path="/prodacts" element={ <PageProdacts /> } />        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;