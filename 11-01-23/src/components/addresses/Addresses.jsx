import { endpoints } from "../../constants/endpoints";
import { useFetch } from "../../hooks/useFetch";
import "./addresses.css";

export function Addresses() {
  const { data, error, loading, refetch } = useFetch(endpoints.addresses);

  if (loading)
    return (
      <div className="addresses_wrapper">
        <p className="list_item">Loading</p>
      </div>
    );
  if (error) return `Errore`;

  return (
    <section className="addresses_wrapper">
      <h2 className="addresses_title">Addresses 🏠</h2>
      <ul className="addresses_list">
        <li>
          <span className="list_item">City: </span>
          {data?.city}
        </li>
        <li>
          <span className="list_item">Street Name: </span>
          {data?.street_name}
        </li>
        <li>
          <span className="list_item">Street Address: </span>
          {data?.street_address}
        </li>
        <li>
          <span className="list_item">Secondary Address: </span>
          {data?.secondary_address}
        </li>
        <li>
          <span className="list_item">Building Number: </span>
          {data?.building_number}
        </li>
        <li>
          <span className="list_item">Mail Box: </span>
          {data?.mail_box}
        </li>
        <li>
          <span className="list_item">State: </span>
          {data?.state}
        </li>
        <li>
          <span className="list_item">Country: </span>
          {data?.country}
        </li>
      </ul>
      <button className="addresses_btn" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
