import "./inputs.css";

export function Inputs(props) {
  const { label = "", type = "text", ...attr } = props;

  return (
    <label className="input-label">
      <span>{label}</span>
      <input type={type} {...attr} />
    </label>
  );
}
