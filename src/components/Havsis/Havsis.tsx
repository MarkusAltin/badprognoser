
export const Havsis = ({spot}: {spot: string}) => {

  const getLink = (spot: string): string => {
    switch (spot) {
      case "salusand": return "https://magicseaweed.com/Salusand-Surf-Report/6784/";
      case "bjuroklubb": return "https://magicseaweed.com/Lillsnack-Point-Surf-Report/4317/";
      default: return ""
    }
  }

  return (
    <div className="havsis">
      <a className='havsis-link' href="https://www.smhi.se/oceanografi/istjanst/produkter/sstcolor.png" target="_blank" rel="noreferrer">
        Havsis
      </a>
      <a className='havsis-link' href={getLink(spot)} target="_blank" rel="noreferrer">
        MSW
      </a>
    </div>
  )
}
