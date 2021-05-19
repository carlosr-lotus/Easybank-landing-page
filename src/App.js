import Header from "./components/Header/index";
import Container from "./components/Container";
import Presentation from "./components/presentation";
import WhyEasybank from "./components/WhyEasybank";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Presentation />
        <WhyEasybank />
      </Container>
    </div>
  );
}

export default App;
