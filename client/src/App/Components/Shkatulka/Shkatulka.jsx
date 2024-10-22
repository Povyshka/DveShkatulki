import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './Shkatulka.scss'
import { getGift } from '../../getGift/getGift'

export default function Shkatulka({ position }) {
  const [result, setResult] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const hasAttempted = Cookies.get('hasAttempted')
    if (hasAttempted) {
      setResult(JSON.parse(hasAttempted))
    }
  }, [])

  const openBox = () => {
    if (!isAnimating && !result) {
      setIsAnimating(true)
      const gift = getGift()
      console.log('gift', gift)

      // Начинаем анимацию и устанавливаем результат после ее завершения
      setTimeout(() => {
        setResult(gift)
        setIsAnimating(false)
        // Cookies.set('hasAttempted', JSON.stringify(gift), { expires: 7 });
      }, 2600) // Время должно соответствовать длительности анимации
    }
  }

  return (
    <div className="shkatulka-wrapper">
      <div
        className={`shkatulka shkatulka-${position}-${result ? 'open' : 'close'} ${
          isAnimating ? 'animate-open' : ''
        }`}
        onClick={openBox}
      ></div>

      <img className="gift" src={`/gifts/${result}`} alt="gift" />
    </div>
  )
}
