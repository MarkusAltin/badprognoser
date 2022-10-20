import { Accordion } from "../../components/Accordion/Accordion"
import { Havsis } from "../../components/Havsis/Havsis"
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer"
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget"

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
              <StormGlassContainer latitude={holm.lat} longitude={holm.lon} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="holmögadd" />
            } />
          </>
        } /></div>
      <div className="border">
        <Accordion title="Salusand" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={salu.lat} longitude={salu.lon} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="salusand" />
            } />
          </>
        } /></div>
      <div className="border">
        <Accordion title="Skagsudde" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={skag.lat} longitude={skag.lon} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="skagsudde" />
            } />
          </>
        } /></div>
      <Havsis />
    </div>
  )
}
