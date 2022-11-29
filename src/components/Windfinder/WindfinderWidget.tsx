
interface Props {
    location: "bjuröklubb" | "holmön" | "holmögadd" | "salusand" | "skagsudde" | "harnosand";
}

export const WindfinderWidget = ({ location }: Props) => {

    return (
        <div className="windfinder">
            {location === "bjuröklubb" &&
                <iframe id="wf-forecast-bjuroklubb"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/bjuroklubb?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>
            }
            {location === "holmön" &&
                <iframe id="wf-forecast-holmon"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/holmon?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>
            }
            {location === "holmögadd" &&
                <iframe id="wf-forecast-holmogadd"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/holmogadd?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>
            }
            {location === "salusand" &&
                <iframe id="wf-forecast-jarnasklubb_nordmaling"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/jarnasklubb_nordmaling?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>}
            {location === "skagsudde" &&
                <iframe id="wf-forecast-skagsudde"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/skagsudde?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>}
            {location === "harnosand" &&
                <iframe id="wf-forecast-lungo_harnosand"
                    title="EYYYp"
                    className="windfinder-frame"
                    src="https://www.windfinder.com/widget/forecast/lungo_harnosand?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                    scrolling="no"
                    frameBorder={0}></iframe>}
        </div>
    )
}
