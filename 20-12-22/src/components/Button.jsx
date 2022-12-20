export function Button() {
  const log = () => {
    console.log("Hello World!");
  };

  return (
    <button
      aria-label="click me to show the console log"
      className="btn"
      onClick={log}
    >
      Click me!
    </button>
  );
}
