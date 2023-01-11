import { endpoints } from "../../constants/endpoints";
import { useFetch } from "../../hooks/useFetch";
import "./creditCards.css";

export function CreditCards() {
  const { data, error, loading, refetch } = useFetch(endpoints.credit_cards);

  if (loading)
    return (
      <div className="card_wrapper">
        <p className="card_list_item">Loading</p>
      </div>
    );
  if (error) return `Errore`;

  return (
    <section className="card_wrapper">
      <h2 className="card_title">Credit Cards 💳</h2>
      <ul className="card_list">
        <li>
          <span className="card_list_item">uid: </span>
          {data?.uid}
        </li>
        <li>
          <span className="card_list_item">Credit card number: </span>
          {data?.credit_card_number}
        </li>
        <li>
          <span className="card_list_item">Credit card expiry date: </span>
          {data?.credit_card_expiry_date}
        </li>
        <li>
          <span className="card_list_item">Credit card type: </span>
          {data?.credit_card_type}
        </li>
      </ul>
      <button className="card_btn" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
