import { Counter } from "../components/counter/Counter";
import { Addresses } from "../components/addresses/Addresses";
import { Beers } from "../components/beers/Beers";
import { CreditCards } from "../components/creditCards/CreditCards";
import { Users } from "../components/users/Users";

export const componentMap = {
  counter: Counter,
  addresses: Addresses,
  beers: Beers,
  creditCards: CreditCards,
  users: Users,
  default: function () {
    return <div></div>;
  },
};
