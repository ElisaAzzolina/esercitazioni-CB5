import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
