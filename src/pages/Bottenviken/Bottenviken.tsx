import { Accordion } from "../../components/Accordion/Accordion";
import { Havsis } from "../../components/Havsis/Havsis";
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer";
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget";


export const Bottenviken = () => {

  return (
    <div className="bottenviken">
      <Accordion title="Salusand" content={
        <>
          <StormGlassContainer />
          <WindfinderWidget />
        </>
      } />
      <Havsis />
      <div className="windfinder-container">
      </div>
    </div>
  )
}
