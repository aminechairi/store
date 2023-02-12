import NavBar from "../../Components/NavBar/NavBar";
import ProdactId from "../../Components/ProdactId//ProdactId";
import Prodacts from "../../Components/Prodacts/Prodacts";
import PaymentMethods from "../../Components/PaymentMethods/PaymentMethods";
import Footer from "../../Components/Footer/Footer";

export default function PageProdactId() {

  return (
    <>
      <NavBar />
      <ProdactId />
      <Prodacts 
        nameTitle="Products you may like"
        bottonStatue={ false }
        bottonTitleStatue={ true }
        displayNumber={ 4 }
        pagination={ false } />
        <PaymentMethods />
      <Footer />
    </>
  );
};