import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import AllCategores from "./pages/AllCategores/AllCategores";
import PageProdacts from "./pages/PageProdacts/PageProdacts";
import AllBrands from "./pages/AllBrands/AllBrands";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PageProdactId from "./pages/PageProdactId/PageProdactId.js";
import UserPage from "./pages/UserPage/UserPage";
import AllOrders from "./Components/UserPageComponents/AllOrders/AllOrders";
import Favorite from "./Components/UserPageComponents/Favorite/Favorite";
import Address from "./Components/UserPageComponents/Address/Address";
import UserProfile from "./Components/UserPageComponents/UserProfile/UserProfile";
import Cart from "./Components/UserPageComponents/Cart/Cart";

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
        <Route path="/user" element={<UserPage />}>
          <Route index element={<AllOrders />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="address" element={<Address />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;