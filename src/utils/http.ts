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
  const keys = [
    "bed50c26-40eb-11ed-a3a1-0242ac130002-bed50c9e-40eb-11ed-a3a1-0242ac130002",
    "05e28a00-6e7b-11ed-bce5-0242ac130002-05e28ab4-6e7b-11ed-bce5-0242ac130002",
    "7ffc3bea-6e7d-11ed-bc36-0242ac130002-7ffc3ca8-6e7d-11ed-bc36-0242ac130002",
    "b9052efe-6e84-11ed-92e6-0242ac130002-b9052fa8-6e84-11ed-92e6-0242ac130002",
    "5bdbd1b2-6f45-11ed-bc36-0242ac130002-5bdbd216-6f45-11ed-bc36-0242ac130002",
    "685e2fac-6f45-11ed-a654-0242ac130002-685e3024-6f45-11ed-a654-0242ac130002",
    "3f1acd88-6f4c-11ed-bc36-0242ac130002-3f1acdf6-6f4c-11ed-bc36-0242ac130002",
    "d29017e2-6f49-11ed-92e6-0242ac130002-d290185a-6f49-11ed-92e6-0242ac130002"

  ];

  for (let i = 0; i < keys.length; i++) {

  const response = await fetch(
    `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}&end=${endDate}`,
    {
      headers: {
        Authorization: keys[i],
      },
    }
  )
  if (!response.ok) {
    if (response.status === 402) {
      console.error("402 trying next api key");
      continue;
    }
    const json = await response.json();
    return {
      ok: false,
      status: response.status,
      error: json
    }
  }
  const json = await response.json();
  return {ok: true, status: response.status, data: json}
}
return {ok: false, status: 500}
}
