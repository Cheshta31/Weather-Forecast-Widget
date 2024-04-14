import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'
function App() {

  const [input, setInput] = useState('')
  const { weather, thisLocation, values, place, setPlace } = useStateContext()

  //console.log(weather)
  const submitCity = () => {
    setPlace(input)
    setInput('')
  }
  return (
    <div className='w-full h-screen text-black px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather Forecast</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if ((e.key === 'Enter')) {
              //submit the form
              submitCity()
            }
          }}  type="text" placeholder="Search City Here" className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={
            e => setInput(e.target.value)
          } />
        </div>
      </nav>
      <BackgroundLayout>      </BackgroundLayout>
      <main className='w-full flex gap-6 py-4 px-[10%] justify-between items-center'>
        <WeatherCard
          place={thisLocation}
          windspeed={weather.windspeed}
          humidity={weather.humidity}
          temperature={weather.temp}
          feelsLike={weather.feelslike}
          iconString={weather.icon}
          conditions={weather.conditions}
        >
        </WeatherCard>
        <div className='flex justify-center flex-wrap gap-8 w-[60%]'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard key={curr.datetime} time={curr.datetime} temp={curr.temp} iconString={curr.conditions}> </MiniCard>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
