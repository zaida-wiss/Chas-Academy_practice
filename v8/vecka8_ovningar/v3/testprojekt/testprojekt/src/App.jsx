import { useMemo, useState } from 'react'
import './App.css'

const activities = [
  'Bygg koja',
  'Skattjakt',
  'Måla med vattenfärger',
  'Dansstopp',
  'Lego-utmaning',
  'Såpbubbel-jakt',
  'Pyssel med papper',
  'Mini-yoga',
  'Hinderbana',
  'Läs en saga',
  'Baka muffins',
  'Kasta boll i hink',
]

function App() {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState('')

  const segmentAngle = 360 / activities.length

  const wheelBackground = useMemo(() => {
    const colors = ['#ffcd5c', '#5ec7fa', '#ff8fa3', '#8ed081', '#c9b8ff', '#ffa85f']
    const slices = activities
      .map((_, index) => {
        const start = index * segmentAngle
        const end = (index + 1) * segmentAngle
        const color = colors[index % colors.length]
        return `${color} ${start}deg ${end}deg`
      })
      .join(', ')

    return `conic-gradient(${slices})`
  }, [segmentAngle])

  const spinWheel = () => {
    if (spinning) return

    const chosenIndex = Math.floor(Math.random() * activities.length)
    const chosenCenter = chosenIndex * segmentAngle + segmentAngle / 2
    const current = ((rotation % 360) + 360) % 360
    const offset = ((270 - chosenCenter - current) % 360 + 360) % 360
    const extraTurns = 360 * 6
    const nextRotation = rotation + extraTurns + offset

    setSpinning(true)
    setResult('')
    setRotation(nextRotation)

    window.setTimeout(() => {
      setResult(activities[chosenIndex])
      setSpinning(false)
    }, 4800)
  }

  return (
    <main className="app">
      <section className="wheel-card">
        <h1>Lyckohjul: Barnaktiviteter</h1>
        <p className="intro">Snurra hjulet och se vad ni hittar på tillsammans.</p>

        <div className="wheel-area">
          <div className="pointer" aria-hidden="true" />
          <div
            className={`wheel ${spinning ? 'spinning' : ''}`}
            style={{ transform: `rotate(${rotation}deg)`, background: wheelBackground }}
          >
            {activities.map((activity, index) => {
              const angle = index * segmentAngle + segmentAngle / 2
              return (
                <span
                  key={activity}
                  className="label"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-160px) rotate(90deg)`,
                  }}
                >
                  {activity}
                </span>
              )
            })}
          </div>
          <div className="hub" />
        </div>

        <button className="spin-button" onClick={spinWheel} disabled={spinning}>
          {spinning ? 'Snurrar...' : 'Snurra hjulet'}
        </button>

        <p className="result" aria-live="polite">
          {result ? `Dagens aktivitet: ${result}` : ' '}
        </p>
      </section>
    </main>
  )
}

export default App
