import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
// import { stormGlassData2 } from "../../utils/exampleData";
import { useEffect, useState } from "react";
import { getStormGlassData } from "../../utils/http";

const dateTwoDaysFromNow = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toISOString();
}
interface Response {
    hours: any[];
    meta: any;
}

interface Props {
    longitude: number;
    latitude: number;
    spot: string
}

export const StormGlassContainer = ({ longitude, latitude, spot }: Props) => {
    const [data, setData] = useState<Response>();
    const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";



    useEffect(() => {
        console.log(window.localStorage.getItem(spot))
        const fetch = async () => {
            if (window.localStorage.getItem(spot) === null) {
                const response = await getStormGlassData(latitude, longitude, params, dateTwoDaysFromNow());
                if (response) {
                    setData(response.data)
                    window.localStorage.setItem(spot, spot)
                }
            }
        }
        fetch();
    }, [latitude, longitude, spot])

    return (
        <div>
            {data ?
                <Carousel slides={data.hours.map((hour: any) => {
                    return (<StormGlassHour forecastHour={hour} />)
                })
                } />
                : <span className="robin"> Robin nu har du tryckt för mycket!! </span>
            }
        </div>
    )
}
