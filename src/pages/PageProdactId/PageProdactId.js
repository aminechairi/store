import NavBar from "../../Components/NavBar/NavBar";
import MenuProdacts from "../../Components/MenuProdacts/MenuProdacts";
import ProdactId from "../../Components/ProdactId//ProdactId";
import Prodacts from "../../Components/Prodacts/Prodacts";
import Footer from "../../Components/Footer/Footer";

export default function PageProdactId() {

  return (
    <>
      <NavBar />
      <MenuProdacts/>
      <ProdactId />
      <Prodacts 
        nameTitle="Products you may like"
        bottonStatue={ false }
        bottonTitleStatue={ true }
        displayNumber={ 4 }
        pagination={ false } />
      <Footer />
    </>
  );
};