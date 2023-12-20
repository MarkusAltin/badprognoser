export const Yr = ({ location }: { location: string }) => { 

    const getSpotId = (spot: string) => { 
        switch (spot) { 
            case "rovogern":
                return "2-450382";
            case "salusand":
                return "2-2603213";
            case "skagsudde":
                return "2-452253";
            case "harnosand":
                return "2-8426490";
            case "bjuröklubb":
                return "2-606567";
            case "holmon":
                return "2-605682";
            case "ratan":
                return "2-450582";
            default:
                return "";
        }
    }

    return <div className="yr-container">
        <div>
        <img src={`https://www.yr.no/en/content/${getSpotId(location)}/meteogram.svg?mode=dark`} alt=""/>
        </div>
        <div className="yr-table-container">
            <iframe className="yr-table" title={location} src={`https://www.yr.no/en/content/${getSpotId(location)}/table.html?mode=dark`} />
        </div>
    </div>
}