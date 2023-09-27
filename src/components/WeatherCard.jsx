function WeatherCard({ location, weather, icon }) {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl my-4">{`${location.name}, ${location.country}`}</h1>
      <div>
        <div className="w-96 border-2 rounded-xl shadow-md my-4 p-4">
          <div>
            <img src={icon} className="pb-2" />
          </div>
          <div className="flex justify-between text-xl">
            <p>Temperature</p>
            <p>{`${weather.temp_c}C / ${weather.temp_f}F`}</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Condition</p>
            <p>{`${weather.condition.text}`}</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Wind Speed</p>
            <p>{`${weather.wind_kph}km/h`}</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Humidity</p>
            <p>{`${weather.humidity}%`}</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Cloud Coverage</p>
            <p>{`${weather.cloud}%`}</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Last Updated</p>
            <p>{`${weather.last_updated}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
