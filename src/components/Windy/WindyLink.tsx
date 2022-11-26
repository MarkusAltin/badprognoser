export const WindyLink = ({ spot }: { spot: string }) => {
    const getLink = (spot: string): string => {
        switch (spot) {
            case "bjuroklubb": return "https://www.windy.com/64.441/21.677/waves?waves,64.221,21.688,9";
            case "ratan": return "https://www.windy.com/64.026/21.068/waves?waves,63.889,21.241,9";
            case "holmon": return "https://www.windy.com/63.846/20.929/waves?waves,63.559,20.962,8";
            case "rovogern": return "https://www.windy.com/63.617/20.552/waves?waves,63.442,20.739,8";
            case "salusand": return "https://www.windy.com/63.372/19.402/waves?waves,63.260,20.259,8";
            case "skagsudde": return "https://www.windy.com/63.119/19.043/waves?waves,62.581,20.065,8";
            default: return ""
        }
    }

    return <div className="smhi">
        <a className={spot === "salusand" ? "link salu" : "link"} href={getLink(spot)}
            target="_blank" rel="noreferrer"> Windy </a>
    </div>
}