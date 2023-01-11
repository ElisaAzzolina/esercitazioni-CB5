import "./App.css";
import { Addresses } from "./components/addresses/Addresses";
import { Beers } from "./components/beers/Beers";
import { CreditCards } from "./components/creditCards/CreditCards";
import { Users } from "./components/users/Users";

function App() {
  return (
    <div className="App">
      <Addresses />
      <Beers />
      <CreditCards />
      <Users />
    </div>
  );
}

export default App;
