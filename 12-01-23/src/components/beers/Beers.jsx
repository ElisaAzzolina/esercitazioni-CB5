import { endpoints } from "../../constants/endpoints";
import { useFetch } from "../../hooks/useFetch";
import "./beers.css";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(endpoints.beers);

  if (loading)
    return (
      <div className="beers_wrapper">
        <p className="beer_list_item">Loading</p>
      </div>
    );
  if (error) return `Errore`;

  return (
    <section className="beers_wrapper">
      <h2 className="beers_title">Beers 🍺</h2>
      <ul className="beers_list">
        <li>
          <span className="beer_list_item">Brand: </span>
          {data?.brand}
        </li>
        <li>
          <span className="beer_list_item">Name: </span>
          {data?.name}
        </li>
        <li>
          <span className="beer_list_item">Style: </span>
          {data?.style}
        </li>
        <li>
          <span className="beer_list_item">Hop: </span>
          {data?.hop}
        </li>
        <li>
          <span className="beer_list_item">Yeast: </span>
          {data?.yeast}
        </li>
        <li>
          <span className="beer_list_item">Malts: </span>
          {data?.malts}
        </li>
        <li>
          <span className="beer_list_item">Alcohol: </span>
          {data?.alcohol}
        </li>
        <li>
          <span className="beer_list_item">Blg: </span>
          {data?.blg}
        </li>
        <button className="beers_btn" onClick={refetch}>
          Refetch!
        </button>
      </ul>
    </section>
  );
}
