/* eslint-disable react-hooks/exhaustive-deps */
import { Carousel } from "../Carousel/Carousel";
import { StormGlassHour } from "./StormGlassHour";
import { useEffect, useState } from "react";
import { getStormGlassData } from "../../utils/http";
import { Response } from "../../App";

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



    useEffect(() => {
        const fetch = async () => {
            if (data === undefined) {
                setLoading(true);
                const response = await getStormGlassData(latitude, longitude, params, dateThreeDaysFromNow());
                if (response) {
                    console.log(spot);
                    setData(response.data);
                }
                setLoading(false);
                return;
            }
        }
        fetch();
    }, [])

    return (
        <div>
            {loading ? <span className="robin">Laddar</span> :
                <div>
                    {data ?
                        <Carousel slides={data.hours.map((hour: any) => {
                            return (<StormGlassHour forecastHour={hour} />)
                        })
                        } />
                        : <span className="robin"> Robin nu har du tryckt för mycket!! </span>
                    }
                </div>
            }
        </div>
    )
}
