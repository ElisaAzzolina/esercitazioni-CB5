import "./header.css";
import logoclick from "./logoclick.png";

export function Header() {
  const navElements = [
    { label: "Home", href: "#header", id: 1 },
    { label: "Chi Siamo", href: "#chisiamo", id: 2 },
    { label: "Contatti", href: "#footer", id: 3 },
  ];

  return (
    <header className="Header">
      <div className="logo">
        <img src={logoclick} alt="logo" className="logoImg" />
      </div>
      <nav className="nav">
        <ul role="menu">
          {navElements.map((item) => {
            return (
              <li key={item.id} role="menuitem">
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
