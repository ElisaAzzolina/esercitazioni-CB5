import Footer from "@/src/components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
