import { StormGlassDisplay } from "./StormGlassDisplay";

interface Props {
    date: Date;
    forecast: string;
    waveDirection: number;
    waveHeight: number;
    wavePeriod: number;
}

export const StormGlassHour = ({ date, forecast, waveDirection, waveHeight, wavePeriod }: Props) => {
    const dateOnly = `${date.getDate()}/${date.getMonth() + 1}`;
    const time = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <div className="stormglass-hour border">
            <div className="time border">
                <h3> {dateOnly} {time}</h3>
            </div>
            <div className="rows">
                <div className="row">
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                </div>
                <div className="row">
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                    <StormGlassDisplay forecast="noaa" waveDirection={180} waveHeight={1.2} wavePeriod={4.5} />
                </div>
            </div>
        </div>
    )
}
