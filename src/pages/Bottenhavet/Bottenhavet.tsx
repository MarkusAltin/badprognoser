import { Response } from "../../App"
import { Accordion } from "../../components/Accordion/Accordion"
import { BalticSeaBuoy } from "../../components/BalticSeaBuoy/BalticSeaBuoy"
import { Havsis } from "../../components/Havsis/Havsis"
import { SmhiContainer } from "../../components/Smhi/Smhi"
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer"
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget"
import { WindyLink } from "../../components/Windy/WindyLink"

interface BottenhavetProps {
  holmogaddData?: Response;
  salusandData?: Response;
  skagsuddeData?: Response;
  setHolmogaddData: (holmogaddData: Response) => void;
  setSalusandData: (salusandData: Response) => void;
  setSkagsuddeData: (skagsuddeData: Response) => void;
}

export const Bottenhavet = ({ holmogaddData, salusandData, skagsuddeData, setHolmogaddData, setSalusandData, setSkagsuddeData }: BottenhavetProps) => {
  const holmo = { lat: 63.613820, lon: 20.544179 };
  const salusand = { lat: 63.383019, lon: 19.363742 };
  const skagsudde = { lat: 63.162019, lon: 19.029801 };
  const harnosand = { lat: 62.605303, lon: 18.088232 };

  return (
    <div className="bottenhavet">
      <div className="border">
        <Accordion title="Holmögadd" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={holmo.lat} longitude={holmo.lon} spot="holmogadd" data={holmogaddData} setData={(data) => setHolmogaddData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="holmögadd" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"rovogern"} />
              <BalticSeaBuoy spot={"rovogern"} />
              <WindyLink spot={"rovogern"} />
            </div>
          </>
        } /></div>
      <div className="border">
        <Accordion title="Salusand" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={salusand.lat} longitude={salusand.lon} spot="salusand" data={salusandData} setData={(data) => setSalusandData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="salusand" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"salusand"} />
              <SmhiContainer spot={"jarnas"} />
              <BalticSeaBuoy spot={"salusand"} />
              <WindyLink spot={"salusand"} />
            </div>
          </>
        } /></div>
      <div className="border">
        <Accordion title="Skagsudde" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={skagsudde.lat} longitude={skagsudde.lon} spot="skagsudde" data={skagsuddeData} setData={(data) => setSkagsuddeData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="skagsudde" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"skagsudde"} />
              <BalticSeaBuoy spot={"skagsudde"} />
              <WindyLink spot={"skagsudde"} />
            </div>
          </>
        } /></div>
      <div className="border">
        <Accordion title="Härnösand" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={harnosand.lat} longitude={harnosand.lon} spot="skagsudde" data={skagsuddeData} setData={(data) => setSkagsuddeData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="harnosand" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"harnosand"} />
              <BalticSeaBuoy spot={"harnosand"} />
              <WindyLink spot={"harnosand"} />
            </div>
          </>
        } /></div>
      <Havsis spot={"salusand"} />
    </div>
  )
}
