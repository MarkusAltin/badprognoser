/* eslint-disable react-hooks/exhaustive-deps */
import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
import { useEffect, useState } from "react";
import { getStormGlassData } from "../../utils/http";
import { Response } from "../../App";
import { hasDaylight } from "../../utils/daylight";

const dateThreeDaysFromNow = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date.toISOString();
}

interface Props {
    longitude: number;
    latitude: number;
    spot: string
    data?: Response;
    setData: (data: Response) => void;
}

export const StormGlassContainer = ({ longitude, latitude, spot, data, setData }: Props) => {
    const params = "swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod";
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [limitedData, setLimitedData] = useState<Response[]>();



    useEffect(() => {
        const fetch = async () => {
            if (data === undefined) {
                setLoading(true);
                const response = await getStormGlassData(latitude, longitude, params, dateThreeDaysFromNow());
                if (!response.ok) {
                    if (response.status === 204) {
                        setLoading(false);
                        return setError("Robin nu har du tryckt för mycket!!")
                    }
                    setLoading(false);
                    return setError("Error");
                }
                if (response.data) {
                    setData(response.data);
                    setLoading(false);
                    setLimitedData(response.data.hours.filter((hour: any, i: number) => hasDaylight(hour.time) || i % 3 === 0));
                    return;
                }
            }
        }
        fetch();
    }, [])



    return (
        <div>
            {loading ? <span className="robin">Laddar</span> :
                <div>
                    {limitedData &&
                        <Carousel slides={limitedData.map((hour: any) => {
                            return (<StormGlassHour forecastHour={hour} />)
                        })
                        } />}

                    error && {<span className="robin"> {error} </span>
                    }
                </div>
            }
        </div>
    )
}
