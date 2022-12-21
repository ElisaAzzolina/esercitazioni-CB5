import "./App.css";
import { Button } from "./components/Button/Button";
import { Text } from "./components/Text/Text";

function App() {
  const name = "Hello World!";
  return (
    <div className="App">
      <Text as="h1" variant="title">
        Hello World!
      </Text>
      <Text as="p" variant="body">
        Questo è un Paragrafo!
      </Text>
      <Button
        variant="primary"
        onClick={() => console.log("Primo Bottone Premuto")}
      >
        Primo Bottone
      </Button>
      <Button
        variant="secondary"
        onClick={() => console.log("Secondo Bottone Premuto")}
      >
        Secondo Bottone
      </Button>
    </div>
  );
}

export default App;
