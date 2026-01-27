'use client'
import { PiSunDimLight } from 'react-icons/pi'
import style from './WeatherWidget.module.sass'
import { CiLocationOn } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import Image from 'next/image'

/* interface WeatherWidgetProps {
  className?: string
} */
type WeatherData = {
  city: string
  country: string
  day: string
  date: string
  time: string
  temperature: number
  weatherCode: number
  situation: string
  icon: string
}

export default function WeatherWidget() {
  //MOCKDATA displayed at the beginning then replaced
  const mockWeather: WeatherData = {
    city: 'Köln',
    country: 'DE',
    day: 'Monday',
    date: '2026-01-20',
    time: '11:00',
    temperature: 4.2,
    weatherCode: 3,
    situation: 'Sunny',
    icon: '',
  }

  //saving the cordinates
  const [coords, setCoords] = useState<null | { lat: number; lon: number }>(null)
  //WEATHER DATA CHANGER
  const [weather, setWeather] = useState<WeatherData>(mockWeather)

  //GET USER LOCATION
  //we are asking for the user location, we must do it in the client.
  //if successful we will fetch the data from the weather provider and update the widget
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      function (error) {
        console.log('Error obtaining location: ', error)
      }
    )
  }, [])

  //Handler--------------------------
  useEffect(() => {
    if (!coords) return

    //Fetch from my endpoint instead of Open weather
    fetch(`/api/weather?lat=${coords.lat}&lon=${coords.lon}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setWeather(data)
        // console.log(weather.situation)
      })
      .catch((err) => console.error(err))
  }, [coords])
  //---------------------------------

  //Dinamic icons url
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <>
      <article className={style.article}>
        <header>
          <div className={style.date}>
            <h2>{weather.day}</h2>
            <time dateTime={`${weather.date}T${weather.time}`}>{weather.date}</time>
          </div>

          <address>
            <CiLocationOn size={30} aria-hidden="true" className={style.location_icon} />
            <p>
              {weather.city}, <span>{weather.country}</span>
            </p>
          </address>
        </header>

        <figure>
          {!coords ? (
            <PiSunDimLight size={80} aria-hidden="true" className={style.weather_icon} />
          ) : (
            <Image src={iconUrl} alt={weather.situation} width={100} height={100} />
          )}
          <figcaption>
            <h2>
              {weather.temperature} <span>°C</span>
            </h2>
            <p>{weather.situation}</p>
          </figcaption>
          <time dateTime={weather.time}>{weather.time}</time>
        </figure>
        {/* Display message on denied location */}
        {!coords ? (
          <div className={style.errorMsg}>
            <h3>We can’t access your location</h3>
            <p>Please allow location access to show local weather and tailor the content for you.</p>
          </div>
        ) : null}
      </article>
    </>
  )
}
