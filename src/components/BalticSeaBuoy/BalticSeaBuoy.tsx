export const BalticSeaBuoy = ({ spot }: { spot: string }) => {
    const getLink = (spot: string): string => {
        switch (spot) {
            case "bjuroklubb": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=64.4272,21.6815&lng=en&tz=Europe/Berlin";
            case "ratan": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=64.0057,21.1102&lng=en&tz=Europe/Berlin";
            case "holmon": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=63.8332,20.9317&lng=en&tz=Europe/Berlin";
            case "rovogern": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=63.6108,20.5499&lng=en&tz=Europe/Berlin";
            case "salusand": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=63.3386,19.3964&lng=en&tz=Europe/Berlin";
            case "skagsudde": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=63.1135,19.0585&lng=en&tz=Europe/Berlin";
            case "harnosand": return "https://www.aaltopoiju.fi/stroke_graph.php?get=online&latlon=62.5693,18.1206&lng=en&tz=Europe/Berlin";
            default: return ""
        }
    }

    return <div className="smhi">
        <a className={spot === "salusand" ? "link salu" : "link"} href={getLink(spot)}
            target="_blank" rel="noreferrer"> Buoy </a>
    </div>
}