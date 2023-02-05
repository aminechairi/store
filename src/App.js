import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AllCategores from "./pages/AllCategores/AllCategores";
import PageProdacts from "./pages/PageProdacts/PageProdacts";
import AllBrands from "./pages/AllBrands/AllBrands";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PageProdactId from "./pages/PageProdactId/PageProdactId.js";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/allcategores" element={ <AllCategores /> } />
        <Route path="/prodacts" element={ <PageProdacts /> } />
        <Route path="/prodact/:id" element={ <PageProdactId /> } />
        <Route path="/allbrands" element={ <AllBrands /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;