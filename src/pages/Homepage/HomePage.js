import NavBar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Prodacts from "../../Components/Prodacts/Prodacts";
import CutBacks from "../../Components/CutBacks/CutBacks";
import TheMostFamousBrands from "../../Components/TheMostFamousBrands/TheMostFamousBrands";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <>

      <NavBar />

      <Slider />

      <Categories
        nameTitle="Categories"
        bottonStatue={ true }
        displayNumber={ 6 }
        pagination={false} />

      <Prodacts 
      nameTitle="Best Seller"
      bottonStatue={ true }
      bottonTitleStatue={ true }
      displayNumber={ 4 }
      pagination={ false }/>

      <CutBacks />

      <Prodacts 
      nameTitle="Latest Fashion"
      bottonStatue={ true }
      bottonTitleStatue={ true }
      displayNumber={ 4 }
      pagination={ false } />

      <TheMostFamousBrands 
        nameTitle="The Most Famous Brands"
        bottonStatue={ true }
        displayNumber={ 8 }
        pagination={ false } />

      <Footer />

    </>
  );
};