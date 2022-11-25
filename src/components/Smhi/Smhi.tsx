
interface SmhiContainerProps {
    spot: string;
}

export const SmhiContainer = ({ spot }: SmhiContainerProps) => {

    const getLink = (spot: string): string => {
        switch (spot) {
            case "bjuroklubb": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Bjur%C3%B6klubb/Skellefte%C3%A5/606567";
            case "ratan": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Ratan/Robertsfors/603420";
            case "holmon": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Holm%C3%B6n/Ume%C3%A5/605682";
            case "rovogern": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Rov%C3%B6gern/Ume%C3%A5/450382";
            case "jarnas": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/J%C3%A4rn%C3%A4sklubb/Nordmaling/2703262";
            case "salusand": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Norra%20Fillingsviken/%C3%96rnsk%C3%B6ldsvik/2603213";
            case "skagsudde": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Skeppsmalen/%C3%96rnsk%C3%B6ldsvik/2677693";
            default: return ""
        }
    }

    return <div className="smhi">
        <a className={spot === "salusand" || spot === "jarnas" ? "link salu" : "link"} href={getLink(spot)} > Smhi </a>
    </div>
}