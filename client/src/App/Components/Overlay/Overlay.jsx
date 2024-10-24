import React from 'react'
import './Overlay.scss'

export default function Overlay({ isVisible }) {
  return (
    <div className={`overlay-body ${isVisible ? '' : 'hidden'}`}>
      <div className="overlay-text">
        <div className="typed-text">Три правильно угаданные буквы</div>

        <div className="typed-text second">дают вам право на две шкатулки...</div>
      </div>
    </div>
  )
}
