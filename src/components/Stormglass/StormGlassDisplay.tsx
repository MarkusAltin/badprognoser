import { DirectionIcon } from "./DirectionIcon";

interface Props {
    forecast: string;
    waveDirection: number;
    waveHeight: number;
    wavePeriod: number;
    swellHeight: number;
    hasDaylight: boolean;
}

export const StormGlassDisplay = ({ forecast, waveDirection, waveHeight, wavePeriod, swellHeight, hasDaylight }: Props) => {

    const border = hasDaylight ? "border" : "dark-border";

    return (
        <div className="stormglass-display">
            <div className={`forecast ${border}`}>
                <h3> {forecast} </h3>
            </div>
            <div className={`wave-direction ${border}`}>
                <DirectionIcon direction={waveDirection} />
            </div>
            <div className={`wave-height ${border}`}>
                <p>{`${waveHeight}m`}</p>
            </div>
            <div className={`wave-period ${border}`}>
                <p>{`${wavePeriod}s`}</p>
            </div>
            <div className={`wave-height ${border}`}>
                <p>{`${swellHeight}m`}</p>
            </div>
        </div>
    )
}
