import { useEffect } from "react";


export const Windy = () => {
    const windyRatanBody = {
        "lat": 64.00459,
        "lon": 20.58576,
        "model": "gfsWave",
        "parameters": ["waves", "swell1", "windWaves"],
        "levels": ["surface", "800h", "300h"],
        "key": "SsNfKVNOlcWRxzkJKnbyJn0WQt99YUec"
      }

    useEffect(() => {
        fetch("https://api.windy.com/api/point-forecast/v2", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(windyRatanBody),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          console.log(new Date(data.ts[2]))
          console.log(data.waves)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      })
      
  return (
    <div>Windy</div>
  )
}
