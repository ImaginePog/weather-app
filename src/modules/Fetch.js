import Weather from "./Weather";

const BASEURL =
  "https://api.weatherapi.com/v1/forecast.json?key=f52a32794db54c7a92182004232909&days=3&aqi=yes&q=";

async function getLocationData(location) {
  const response = await fetch(BASEURL + location, { mode: "cors" });

  const data = await response.json();

  if (data.error) {
    throw Error(data.error.message);
  }

  console.log(data);

  return data;
}

function getLargeIconURL(url) {
  return url.replace("64x64", "128x128");
}

function parseUVLevel(uv) {
  if (uv <= 2) {
    return "low";
  } else if (uv <= 5) {
    return "mid";
  } else {
    return "high";
  }
}

function processAPIData(data) {
  const processed = new Weather({
    location: {
      country: data.location.country,
      name: data.location.name,
      time: data.location.localtime,
    },
    temperature: {
      celsius: Math.round(data.current.temp_c),
      fahrenheit: Math.round(data.current.temp_f),
    },
    temperatureMax: {
      celsius: Math.round(data.forecast.forecastday[0].day.maxtemp_c),
      fahrenheit: Math.round(data.forecast.forecastday[0].day.maxtemp_f),
    },
    temperatureMin: {
      celsius: Math.round(data.forecast.forecastday[0].day.mintemp_c),
      fahrenheit: Math.round(data.forecast.forecastday[0].day.mintemp_f),
    },
    feelsLike: {
      celsius: Math.round(data.current.feelslike_c),
      fahrenheit: Math.round(data.current.feelslike_f),
    },
    condition: {
      text: data.current.condition.text,
      icon: getLargeIconURL(data.current.condition.icon),
    },
    uvIndex: data.current.uv,
    cloudCoverage: data.current.cloud,
    humidity: {
      current: data.current.humidity,
      average: data.forecast.forecastday[0].day.avghumidity,
    },
    wind: {
      speedKPH: data.current.wind_kph,
      speedMPH: data.current.wind_mph,
      direction: data.current.wind_dir,
    },
    moon: {
      illumination: data.forecast.forecastday[0].astro.moon_illumination,
      phase: data.forecast.forecastday[0].astro.moon_phase,
    },
    visibility: { km: data.current.vis_km, miles: data.current.vis_miles },
    rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
    sun: {
      rise: data.forecast.forecastday[0].astro.sunrise,
      set: data.forecast.forecastday[0].astro.sunset,
    },
    pollution: {
      current: data.current.air_quality.pm10,
      average: data.forecast.forecastday[0].day.air_quality.pm10.toFixed(1),
    },

    windMax: {
      speedKPH: data.forecast.forecastday[0].day.maxwind_kph,
      speedMPH: data.forecast.forecastday[0].day.maxwind_mph,
    },
    visibilityAvg: {
      km: data.forecast.forecastday[0].day.avgvis_km,
      miles: data.forecast.forecastday[0].day.avgvis_miles,
    },
    uvLevel: parseUVLevel(data.current.uv),
  });

  return processed;
}

export { getLocationData, processAPIData };
