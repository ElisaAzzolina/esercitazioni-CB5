import "./button.css";

const buttonVariantMap = {
  primary: "purple-background",
  secondary: "green-background",
};

export function Button(props) {
  const {
    className = "",
    children = "no {children}",
    variant = "none",
    ...attributes
  } = props;

  return (
    <button
      aria-label="click me to show the console log"
      className={`Btn ${buttonVariantMap[variant] ?? ""}`}
      {...attributes}
    >
      Click me!
    </button>
  );
}
