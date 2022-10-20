import { Route, Routes } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { Header } from "./components/Header/Header";
import { Bottenhavet } from "./pages/Bottenhavet/Bottenhavet";
import { Bottenviken } from "./pages/Bottenviken/Bottenviken";
import { Home } from "./pages/Home/Home";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <WavyContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bottenviken" element={<Bottenviken />} />
          <Route path="/bottenhavet" element={<Bottenhavet />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;