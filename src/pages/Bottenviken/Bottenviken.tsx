import { Accordion } from "../../components/Accordion/Accordion"
import { Havsis } from "../../components/Havsis/Havsis"
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer"


export const Bottenviken = () => {

  return (
    <div className="bottenviken">
      <Accordion title="Salusand" content={
        <StormGlassContainer />
      } />
      <Havsis />
    </div>
  )
}
