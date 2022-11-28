
export const Havsis = ({ spot }: { spot: string }) => {

  const getLink = (spot: string): string => {
    switch (spot) {
      case "salusand": return "https://magicseaweed.com/Salusand-Surf-Report/6784/";
      case "bjuroklubb": return "https://magicseaweed.com/Lillsnack-Point-Surf-Report/4317/";
      default: return ""
    }
  }

  const getFinneLink = (spot: string): string => {
    switch (spot) {
      case "salusand": return "https://sv.ilmatieteenlaitos.fi/vagprognosen?vattenh%C3%B6jd=bottenhavet";
      case "bjuroklubb": return "https://sv.ilmatieteenlaitos.fi/vagprognosen?vattenh%C3%B6jd=bottenviken";
      default: return ""
    }
  }

  return (
    <div className="flex">
      <div className="havsis">
        <a className='havsis-link' href="https://www.smhi.se/oceanografi/istjanst/produkter/sstcolor.png" target="_blank" rel="noreferrer">
          Havsis
        </a>
        <a className='havsis-link' href={getLink(spot)} target="_blank" rel="noreferrer">
          MSW
        </a>
        <a className='havsis-link' href="https://balticseabuoy.com/" target="_blank" rel="noreferrer">
          Buoy
        </a>
      </div>
      <div className="havsis">
        <a className='havsis-link' href="https://www.sjoraddning.se/vader" target="_blank" rel="noreferrer">
          Sjöräddning
        </a>
        <a className='havsis-link' href={getFinneLink(spot)} target="_blank" rel="noreferrer">
          Finsk våg
        </a>
      </div>
    </div>
  )
}
