'use client'
import { PiSunDimLight } from 'react-icons/pi'
import style from './WeatherWidget.module.sass'
import { CiLocationOn } from 'react-icons/ci'
import { useEffect, useState } from 'react'
interface WeatherWidgetProps {
  className?: string
}

export default function WeatherWidget({ className }: WeatherWidgetProps) {
  const mockWeather = {
    location: {
      city: 'Köln',
      country: 'DE',
      latitude: 50.94,
      longitude: 6.96,
    },
    datetime: {
      iso: '2026-01-20T10:00:00Z',
      day: 'Monday',
      date: '2026-01-20',
      time: '11:00',
    },
    current: {
      temperature: 4.2,
      weatherCode: 3,
      situation: 'partly_cloudy',
      icon: 'partly-cloudy',
      windSpeed: 12.4,
      precipitation: 0.0,
    },
    mood: 'calm',
  }

  //we are saving the cordinate in a state for reuse
  const [coords, setCoords] = useState<null | { lat: number; lon: number }>(null)

  //we are asking for the user location, we must do it in the client.
  //if successful we will fetch the data from the weather provider and update the widget
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log('Latitude is: ', position.coords.latitude)
        console.log('Longitude is: ', position.coords.longitude)

        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      function (error) {
        console.error('Error obtaining location: ', error)
      }
    )
  }, [])

  return (
    <article>
      <header>
        <div>
          <h2>{mockWeather.datetime.day}</h2>
          <time dateTime={mockWeather.datetime.date}>{mockWeather.datetime.date}</time>
        </div>

        <address>
          <CiLocationOn size={20} />
          {mockWeather.location.city}, <span>{mockWeather.location.country}</span>
        </address>
      </header>

      <figure>
        <PiSunDimLight size={80} aria-hidden="true" />
        <figcaption>
          <h2>
            {mockWeather.current.temperature} <span>°C</span>
          </h2>
          <p>{mockWeather.current.situation}</p>
        </figcaption>
      </figure>

      <div>

      </div>
    </article>
  )
}
