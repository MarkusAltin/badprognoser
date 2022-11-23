
interface SmhiContainerProps {
    spot: string;
}

export const SmhiContainer = ({ spot }: SmhiContainerProps) => {

    const getLink = (spot: string): string => {
        switch (spot) {
            case "salusand": return "https://www.smhi.se/vader/prognoser/ortsprognoser/q/Norra%20Fillingsviken/%C3%96rnsk%C3%B6ldsvik/2603213";
            default: return ""
        }
    }

    return <div className="smhi">
        <a className="link" href={getLink(spot)} > Smhi </a>
    </div>
}