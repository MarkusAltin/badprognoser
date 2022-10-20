import { Accordion } from "../../components/Accordion/Accordion";
import { Havsis } from "../../components/Havsis/Havsis";
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer";
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget";


export const Bottenviken = () => {
  const ratan = { lat: 64.00459, lon: 20.58576 };
  const bjur = { lat: 64.43600, lon: 21.63468 };
  const holm = { lat: 63.85230, lon: 20.87749 };

  return (
    <div className="bottenviken">
      <div className="border">
        <Accordion title="Bjuröklubb" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={bjur.lat} longitude={bjur.lon} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="bjuröklubb" />
            } />
          </>
        } /> </div>
      <div className="border">
        <Accordion title="Ratan" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={ratan.lat} longitude={ratan.lon} />
            } />
          </>
        } /> </div>
      <div className="border">
        <Accordion title="Holmön" content={
          <>
            <Accordion title="StormGlass" content={
              <StormGlassContainer latitude={holm.lat} longitude={holm.lon} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="holmön" />
            } />
          </>
        } /> </div>
      <Havsis />
    </div>
  )
}
