import { StormGlassDisplay } from "./StormGlassDisplay";

interface Props {
    forecastHour: any;
}

export const StormGlassHour = ({ forecastHour }: Props) => {
    const dateOnly = `${new Date(forecastHour.time).getDate()}/${new Date(forecastHour.time).getMonth() + 1} `;
    const time = `${new Date(forecastHour.time).getHours()}:${new Date(forecastHour.time).getMinutes()}0`;

    return (
        <div className="stormglass-hour border">
            <div className="time border">
                <h3> {dateOnly} </h3>
                <h3> {time} </h3>
            </div>
            <div className="rows">
                <div className="row">
                    <StormGlassDisplay forecast="noaa" waveDirection={forecastHour.waveDirection.noaa} waveHeight={forecastHour.waveHeight.noaa ?? 0}
                        wavePeriod={forecastHour.wavePeriod.noaa ?? 0} swellHeight={forecastHour.swellHeight.noaa ?? 0} />
                    <StormGlassDisplay forecast="fmi" waveDirection={forecastHour.waveDirection.fmi} waveHeight={forecastHour.waveHeight.fmi ?? 0}
                        wavePeriod={forecastHour.wavePeriod.fmi ?? 0} swellHeight={forecastHour.swellHeight.fmi ?? 0} />
                    <StormGlassDisplay forecast="icon" waveDirection={forecastHour.waveDirection.icon} waveHeight={forecastHour.waveHeight.icon ?? 0}
                        wavePeriod={forecastHour.wavePeriod.icon ?? 0} swellHeight={forecastHour.swellHeight.icon ?? 0} />
                </div>
            </div>
        </div>
    )
}
