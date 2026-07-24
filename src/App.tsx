// Vendored copy of deskfolio (dist build) so the notebook content, cover,
// stickers, and links can be customized for Megha Mittal.
import { useState } from 'react'
import { PullCord } from 'pullcord'
import 'pullcord/pullcord.css'
import { DeskFolio } from './deskfolio/deskfolio'
import './deskfolio/deskfolio.css'
import './App.css'

export default function App() {
  const [lightsOn, setLightsOn] = useState(true)

  return (
    <div className={lightsOn ? 'room' : 'room room--dark'}>
      <DeskFolio />
      <div className="room-dim" aria-hidden="true" />
      <PullCord
        onPull={() => setLightsOn((on) => !on)}
        pulled={!lightsOn}
        ariaLabel="Toggle the room light"
      />
    </div>
  )
}
