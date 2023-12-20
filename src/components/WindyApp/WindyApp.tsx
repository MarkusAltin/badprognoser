export const WindyApp = ({location}: {location: string}) => { 

    const getSpotId = (spot: string) => { 
        switch (spot) {  
            case "holmögadd": 
                return "2664327"; 
            case "salusand": 
                return "600505"; 
            case "skagsudde": 
                return "2664353"; 
            default: 
                return "2664327";
        }
    }

    return <div>
        <div
    data-windywidget="forecast"
    data-thememode="white"
    data-spotid={getSpotId(location)}
    data-appid="11e75c52a03069f4f52d78d6961605ef">
    <script async={true} data-cfasync={false} type="text/javascript"
     src="https://windy.app/widgets-code/forecast/windy_forecast_async.js?v1.4.2">

     </script>
    </div>
    </div>
}