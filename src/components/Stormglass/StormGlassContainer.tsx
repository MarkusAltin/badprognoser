import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
import { stormGlassData2 } from "../../utils/exampleData";
import { useEffect, useState } from "react";
import { getStormGlassData } from "../../utils/http";

const dateTwoDaysFromNow = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date.toISOString();
}

const sixHoursBefore = (date: Date): Date => {
    date.setHours(date.getHours() - 6);
    return date;
}
interface Response {
    hours: any[];
    meta: any;
}

interface Props {
    longitude: number;
    latitude: number;
}

export const StormGlassContainer = ({ longitude, latitude }: Props) => {
    const exampleData = stormGlassData2();
    const [data, setData] = useState<Response>();
    const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";
    const date = dateTwoDaysFromNow();
    // const data = getStormGlassData(latitude, longitude, params, date);
    const sixHoursAgo = sixHoursBefore(new Date(date));



    useEffect(() => {
        if (!data || data.meta.end < sixHoursAgo) {
            const response = getStormGlassData(latitude, longitude, params, date);
            console.log(response);
            if (response) {
                setData(response)
            }
        }
    }, [])

    return (
        <div>
            <Carousel slides={exampleData.hours.map((hour: any) => {
                return (<StormGlassHour forecastHour={hour} />)
            })
            } />
        </div>
    )
}
