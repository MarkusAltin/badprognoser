import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
import { stormGlassData2 } from "../../utils/exampleData";

// const dateFourDaysFromNow = (): string => {
//     const date = new Date();
//     date.setDate(date.getDate() + 2);
//     return date.toISOString();
// }

export const StormGlassContainer = () => {
    const exampleData = stormGlassData2();
    // const salu = { lat: 63.383019, lon: 19.363742 };
    // const ratan = { lat: 64.00459, lon: 20.58576 };
    // const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";
    // const date = dateFourDaysFromNow();

    return (
        <div>
            <Carousel slides={exampleData.hours.map((hour: any) => {
                return (<StormGlassHour forecastHour={hour} />)
            })
            } />
        </div>
    )
}
