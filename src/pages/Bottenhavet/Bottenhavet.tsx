import { Accordion } from "../../components/Accordion/Accordion"
import { BalticSeaBuoy } from "../../components/BalticSeaBuoy/BalticSeaBuoy"
import { Havsis } from "../../components/Havsis/Havsis"
import { SmhiContainer } from "../../components/Smhi/Smhi"
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer"
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget"
import { WindyLink } from "../../components/Windy/WindyLink"

export const Bottenhavet = () => {
  const holm = { lat: 63.613820, lon: 20.544179 };
  const salu = { lat: 63.383019, lon: 19.363742 };
  const skag = { lat: 63.162019, lon: 19.029801 };

  return (
    <div className="bottenhavet">
      <div className="border">
        <Accordion title="Holmögadd" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={holm.lat} longitude={holm.lon} spot="holmogadd" />
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
              <StormGlassContainer latitude={salu.lat} longitude={salu.lon} spot="salusand" />
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
              <StormGlassContainer latitude={skag.lat} longitude={skag.lon} spot="skagsudde" />
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
      <Havsis spot={"salusand"} />
    </div>
  )
}
