import Header from "./components/Header/index";
import Container from "./components/Container";
import Presentation from "./components/presentation";
import WhyEasybank from "./components/WhyEasybank";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Presentation />
        <WhyEasybank />
        <Articles />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
