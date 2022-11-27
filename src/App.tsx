import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Bottenhavet } from "./pages/Bottenhavet/Bottenhavet";
import { Bottenviken } from "./pages/Bottenviken/Bottenviken";
import { Home } from "./pages/Home/Home";

export interface Response {
  hours: any[];
  meta: any;
}

function App(): JSX.Element {
  const [bjuroklubbData, setBjuroklubbData] = useState<Response>();
  const [ratanData, setRatanData] = useState<Response>();
  const [holmonData, setHolmonData] = useState<Response>();
  const [holmogaddData, setHolmogaddData] = useState<Response>();
  const [salusandData, setSalusandData] = useState<Response>();
  const [skagsuddeData, setSkagsuddeData] = useState<Response>();
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/bottenviken"} element={<Bottenviken bjuroklubbData={bjuroklubbData} ratanData={ratanData} holmonData={holmonData}
            setBjuroklubbData={setBjuroklubbData} setRatanData={setRatanData} setHolmonData={setHolmonData} />} />
          <Route path={"/bottenhavet"} element={<Bottenhavet holmogaddData={holmogaddData} salusandData={salusandData} skagsuddeData={skagsuddeData}
            setHolmogaddData={setHolmogaddData} setSalusandData={setSalusandData} setSkagsuddeData={setSkagsuddeData} />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
