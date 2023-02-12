import NavBar from "../../Components/NavBar/NavBar";
import TheMostFamousBrands from "../../Components/TheMostFamousBrands/TheMostFamousBrands";
import Footer from "../../Components/Footer/Footer";

export default function AllBrands() {
  return (
    <>
      <NavBar />
      <TheMostFamousBrands 
        nameTitle="The Most Famous Brands"
        bottonStatue={ false }
        displayNumber={ 12 }
        pagination={ true } />
        <Footer />
    </>
  );
};