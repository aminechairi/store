import NavBar from "../../Components/NavBar/NavBar";
import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";

export default function AllCategores() {

  return (
    <>
      <NavBar />
      <Categories 
        nameTitle="All Categories"
        bottonStatue={ false }
        displayNumber={ 12 }
        pagination={true} />
      <Footer />
    </>
  );
};