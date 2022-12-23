import "./text.css";

const variantMap = {
  body: `text-primary`,
  title: `text-title`,
};

export const Text = (props) => {
  const { as = "div", children, variant = "body", ...attributes } = props;
  const El = as;

  return (
    <El className={`Text ${variantMap[variant] ?? ""}`} {...attributes}>
      {children}
    </El>
  );
};
