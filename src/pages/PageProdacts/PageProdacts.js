import NavBar from "../../Components/NavBar/NavBar";
import MenuProdacts from "../../Components/MenuProdacts/MenuProdacts";
import ProdactsDetails from "../../Components/ProdactsDetails/ProdactsDetails";
import Footer from "../../Components/Footer/Footer";

export default function PageProdacts() {
  return (
    <>
      <NavBar />
      <MenuProdacts />
      <ProdactsDetails />
      <Footer />
    </>
  );
};