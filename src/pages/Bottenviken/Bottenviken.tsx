import { Response } from "../../App";
import { Accordion } from "../../components/Accordion/Accordion";
import { BalticSeaBuoy } from "../../components/BalticSeaBuoy/BalticSeaBuoy";
import { Havsis } from "../../components/Havsis/Havsis";
import { SmhiContainer } from "../../components/Smhi/Smhi";
import { StormGlassContainer } from "../../components/Stormglass/StormGlassContainer";
import { WindfinderWidget } from "../../components/Windfinder/WindfinderWidget";
import { WindyLink } from "../../components/Windy/WindyLink";
import { Yr } from "../../components/Yr/Yr";

interface BottenvikenProps {
  bjuroklubbData?: Response;
  ratanData?: Response;
  holmonData?: Response;
  setBjuroklubbData: (bjuroklubbData: Response) => void;
  setRatanData: (ratanData: Response) => void;
  setHolmonData: (holmonData: Response) => void;
}

export const Bottenviken = ({ bjuroklubbData, ratanData, holmonData, setBjuroklubbData, setRatanData, setHolmonData }: BottenvikenProps) => {
  const ratan = { lat: 64.00459, lon: 20.58576 };
  const bjur = { lat: 64.43600, lon: 21.63468 };
  const holm = { lat: 63.85230, lon: 20.87749 };

  return (
    <div className="bottenviken">
      <div className="border">
        <Accordion title="Bjuröklubb" content={
          <>
            <Accordion title="Prognoser" content={
              <StormGlassContainer latitude={bjur.lat} longitude={bjur.lon} spot="bjuroklubb" data={bjuroklubbData} setData={(data) => setBjuroklubbData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="bjuröklubb" />
            } />
            <Accordion title="Yr" content={
              <Yr location="bjuroklubb" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"bjuroklubb"} />
              <BalticSeaBuoy spot={"bjuroklubb"} />
              <WindyLink spot={"bjuroklubb"} />
            </div>
          </>
        } /> </div>
      <div className="border">
        <Accordion title="Ratan" content={
          <>
            <Accordion title="Prognoser" content={
              <StormGlassContainer latitude={ratan.lat} longitude={ratan.lon} spot="ratan" data={ratanData} setData={(data) => setRatanData(data)} />
            } />
            <Accordion title="Yr" content={
              <Yr location="ratan" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"ratan"} />
              <BalticSeaBuoy spot={"ratan"} />
              <WindyLink spot={"ratan"} />
            </div>
          </>
        } /> </div>
      <div className="border">
        <Accordion title="Holmön" content={
          <>
            <Accordion title="Prognoser" content={
              <StormGlassContainer latitude={holm.lat} longitude={holm.lon} spot="holmon" data={holmonData} setData={(data) => setHolmonData(data)} />
            } />
            <Accordion title="Windfinder" content={
              <WindfinderWidget location="holmön" />
            } />
            <Accordion title="Yr" content={
              <Yr location="holmon" />
            } />
            <div className="spot-links">
              <SmhiContainer spot={"holmon"} />
              <BalticSeaBuoy spot={"holmon"} />
              <WindyLink spot={"holmon"} />
            </div>
          </>
        } /> </div>
      <Accordion title="Windy vindkarta" content={
        <div style={{ textAlign: "center" }}>
          <iframe title="bottenviken-windy-widget" className="windy-widget"
            src="https://embed.windy.com/embed2.html?lat=64.235&lon=22.299&detailLat=63.825&detailLon=20.256&width=650&height=450&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
            frameBorder="0" />
        </div>
      }
      />
      <Havsis spot={"bjuroklubb"} />
    </div>
  )
}
