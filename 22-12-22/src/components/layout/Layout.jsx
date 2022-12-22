import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import "./layout.css";

export function Container(props) {
  const { children } = props;

  return (
    <div className="container">
      <Header />
      <main className="mainContainer">{children}</main>
      <Footer />
    </div>
  );
}
