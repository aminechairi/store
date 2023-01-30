import NavBar from "../../Components/HomePage/NavBar/NavBar";
import Slider from "../../Components/HomePage/Slider/Slider";
import Categories from "../../Components/HomePage/Categories/Categories";
import BestSeller from "../../Components/HomePage/BestSeller/BestSeller";
import CutBacks from "../../Components/HomePage/CutBacks/CutBacks";
import TheMostFamousBrands from "../../Components/HomePage/TheMostFamousBrands/TheMostFamousBrands";
import Footer from "../../Components/HomePage/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Slider />
      <Categories />
      <BestSeller />
      <CutBacks />
      <BestSeller />
      <TheMostFamousBrands />
      <Footer />
    </>
  )
}