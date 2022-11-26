export interface ApiResponse {
  ok: boolean;
  status: number;
  data?: any;
  error?: any;
}

export const getStormGlassData = async (latitude: number, longitude: number, params: string, endDate: string): Promise<ApiResponse> => {
  return await request(latitude, longitude, params, endDate);
};


const request = async (latitude: number, longitude: number, params: string, endDate: string): Promise<ApiResponse> => {
  const key =
    "bed50c26-40eb-11ed-a3a1-0242ac130002-bed50c9e-40eb-11ed-a3a1-0242ac130002";
  
  const response = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}&end=${endDate}`,
    {
      headers: {
        Authorization: key,
      },
    }
  )
  if (!response.ok) {
    const json = await response.json();
    console.error(json)
    return {
      ok: false,
      status: response.status,
      error: json
    }
  }
  const json = await response.json();
  console.log(json)
  return {ok: true, status: response.status, data: json}

    // .then((response) => {
    //   response.json()
    // })
    // .then((data) => {
    //   console.log("Success:", JSON.stringify(data));
    //   return data;
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    // });
}
