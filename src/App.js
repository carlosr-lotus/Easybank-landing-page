import Header from "./components/Header/index";
import Container from "./components/Container";
import Presentation from "./components/presentation";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Presentation />
      </Container>
    </div>
  );
}

export default App;
