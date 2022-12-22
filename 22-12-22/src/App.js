import "./App.css";
import { Button } from "./atoms/Button/Button";
import { Text } from "./atoms/Text/Text";
import { Container } from "./components/layout/Layout";

function App() {
  const name = "Hello World!";
  return (
    <Container>
      <Text as="h1" variant="title">
        Hello World!
      </Text>
      <Text as="p" variant="body">
        Click the buttons!
      </Text>
      <div class="btnContainer">
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
    </Container>
  );
}

export default App;
