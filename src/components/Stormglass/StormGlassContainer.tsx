import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
import { stormGlassData2 } from "../../utils/exampleData";
// import { getStormGlassData } from "../../utils/http";

// const dateFourDaysFromNow = (): string => {
//     const date = new Date();
//     date.setDate(date.getDate() + 2);
//     return date.toISOString();
// }

interface Props {
    longitude: number;
    latitude: number;
}

export const StormGlassContainer = ({ longitude, latitude }: Props) => {
    const exampleData = stormGlassData2();
    // const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";
    // const date = dateFourDaysFromNow();
    // const data = getStormGlassData(latitude, longitude, params, date);

    return (
        <div>
            <Carousel slides={exampleData.hours.map((hour: any) => {
                return (<StormGlassHour forecastHour={hour} />)
            })
            } />
        </div>
    )
}
