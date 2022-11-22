import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/badprognoser/bottenviken"} element={<Bottenviken />} />
          <Route path={process.env.PUBLIC_URL + "/badprognoser/bottenhavet"} element={<Bottenhavet />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
