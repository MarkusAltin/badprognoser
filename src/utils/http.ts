export const getStormGlassData = (latitude: number, longitude: number, params: string, endDate: string) => {
  const key =
    "bed50c26-40eb-11ed-a3a1-0242ac130002-bed50c9e-40eb-11ed-a3a1-0242ac130002";

  fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}&end=${endDate}`,
    {
      headers: {
        Authorization: key,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
