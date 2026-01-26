//route.ts
// The server route (/api/weather) was made to prevent the client to see the key
// Performs the request to the external weather provider

// Client flow:
// - Client component gets user coordinates (browser-only)
// - Client calls this route with lat/lon
// - Receives sanitized weather data (no API key exposed)

import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  //extra guard - the client is returning - when the cordinate's permissions aren't granted
  if (!lat || !lon) {
    return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_APIKEY}`
    )

    if (!res.ok) {
      throw new Error(`OpenWeather response: ${res.status}`)
    }

    const data = await res.json()

    //DATA FORMATTING
    const dateObj = new Date(data.dt * 1000)
    const formattedDate = dateObj.toLocaleDateString(data.sys.country, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    const formattedDay = dateObj.toLocaleDateString(data.sys.country, { weekday: 'long' })
    const formattedTime = dateObj.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })

    const formattedTemperature = data.main.temp.toFixed(0)

    // MAPPING MOMENT - Because matching the shape of the obj "mockWeather" is a good thing.
    const weatherData = {
      city: data.name,
      country: data.sys.country,
      day: formattedDay,
      date: formattedDate,
      time: formattedTime,
      temperature: formattedTemperature,
      weatherCode: data.weather[0].id,
      situation: data.weather[0].main.toLowerCase(),
      icon: data.weather[0].icon,
    }

    // save the response in a variable instead
    const response = NextResponse.json(weatherData)

    // Set the cookie on the response
    response.cookies.set('user-weather-code', weatherData.weatherCode.toString(), {
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: 'lax',
    })
    //returning cookie and response
    return response
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unexpected error'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
