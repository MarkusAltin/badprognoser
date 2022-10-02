import { useEffect } from "react";
import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";

const dateFourDaysFromNow = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date.toISOString();
}

export const StormGlassContainer = () => {
    const ratan = { lat: 64.00459, lon: 20.58576 };
    const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";
    const date = dateFourDaysFromNow();
    const key = "bed50c26-40eb-11ed-a3a1-0242ac130002-bed50c9e-40eb-11ed-a3a1-0242ac130002";

    // useEffect(() => {
    //     fetch(`https://api.stormglass.io/v2/weather/point?lat=${ratan.lat}&lng=${ratan.lon}&params=${params}&end=${date}`, {
    //         headers: {
    //             'Authorization': key,
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Success:', JSON.stringify(data));
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // })

    return (
        <div>StormGlass
            <Carousel slides={[
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
                <StormGlassHour date={new Date()} forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />,
            ]} />
        </div>
    )
}
