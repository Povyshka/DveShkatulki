import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './Shkatulka.scss'
import { getGift } from '../../getGift/getGift'

export default function Shkatulka({
  position,
  onOpen,
  isFading,
  setMessage,
  setGiftName,
}) {
  const [result, setResult] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const hasAttempted = Cookies.get('dveShkatulki')
    if (hasAttempted) {
      setResult(JSON.parse(hasAttempted))
    }
  }, [])

  const openBox = () => {
    if (!isAnimating && !result) {
      setIsAnimating(true)
      const gift = getGift()

      onOpen()

      setTimeout(() => {
        setResult(gift)
        setIsAnimating(false)
        setMessage('Поздравляю, твой приз:')
      }, 2600)
      setTimeout(() => {
        setGiftName(gift.name)
        Cookies.set('dveShkatulki', JSON.stringify(gift), { expires: 7 });
      }, 3800)
    }
  }

  return (
    <div className="shkatulka-wrapper">
      <div
        className={`shkatulka shkatulka-${position}-${
          result ? 'open' : 'close'
        } ${isAnimating ? 'animate-open' : ''} ${isFading ? 'fade-out' : ''}`}
        onClick={openBox}
      ></div>

      <img className="gift" src={`/gifts/${result?.url}`} alt="gift" />
    </div>
  )
}
