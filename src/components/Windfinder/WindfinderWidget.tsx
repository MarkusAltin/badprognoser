
import React from "react";

export const WindfinderWidget = () => {

    return (
        <div className="windfinder">
            <iframe id="wf-forecast-jarnasklubb_nordmaling"
                title="EYYYp"
                className="windfinder-frame"
                src="https://www.windfinder.com/widget/forecast/jarnasklubb_nordmaling?days=3&amp;columns=2&amp;unit_wind=kts&amp;unit_temperature=c&amp;unit_wave=m&amp;unit_rain=mm&amp;unit_pressure=hPa&amp;label_wind=kts&amp;show_wind=0&amp;show_temperature=0&amp;show_waves=1&amp;show_rain=0&amp;show_clouds=0&amp;show_pressure=0&amp;show_day=0&amp;version=1&amp;domain=localhost"
                scrolling="no"
                frameBorder={0}></iframe>
        </div>
    )
}
