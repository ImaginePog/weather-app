import Weather from "./Weather";
import Hour from "./Hour";

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

function parsePollutionLevel(index) {
  if (index <= 3) {
    return "low";
  } else if (index <= 6) {
    return "mid";
  } else {
    return "high";
  }
}

function processHours(currentHour, hours) {
  const processedHours = [];

  const timeStep = 2;
  const itemsRange = 3;
  const offset = timeStep * itemsRange;
  const maxHours = 23;
  let centerHour = currentHour;

  if (currentHour >= maxHours - offset) {
    centerHour = currentHour - offset;
  } else if (currentHour <= offset) {
    centerHour = currentHour + offset;
  }

  for (let i = centerHour - offset; i <= centerHour + offset; i += timeStep) {
    if (i == currentHour) {
      hours[i].current = true;
    }
    processedHours.push(
      new Hour({
        icon: hours[i].condition.icon,
        feelsLike: {
          celsius: Math.round(hours[i].feelslike_c),
          fahrenheit: Math.round(hours[i].feelslike_f),
        },
        time: hours[i].time.split(" ")[1],
        rain: hours[i].chance_of_rain,
        current: hours[i].current,
      })
    );
  }

  return processedHours;
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
    uv: { index: data.current.uv, level: parseUVLevel(data.current.uv) },
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
      index: data.current.air_quality["gb-defra-index"],
      level: parsePollutionLevel(data.current.air_quality["gb-defra-index"]),
    },

    windMax: {
      speedKPH: data.forecast.forecastday[0].day.maxwind_kph,
      speedMPH: data.forecast.forecastday[0].day.maxwind_mph,
    },
    visibilityAvg: {
      km: data.forecast.forecastday[0].day.avgvis_km,
      miles: data.forecast.forecastday[0].day.avgvis_miles,
    },
  });

  processed.hours = processHours(
    new Date(data.location.localtime).getHours(),
    data.forecast.forecastday[0].hour
  );

  return processed;
}

export { getLocationData, processAPIData };
