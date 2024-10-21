import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './Shkatulka.scss'
import { getGift } from '../../getGift/getGift'

export default function Shkatulka() {
  const [result, setResult] = useState(null)

  // Загружаем состояние с сервера или инициализируем
  useEffect(() => {
    const hasAttempted = Cookies.get('hasAttempted')
    if (hasAttempted) {
      setResult(JSON.parse(hasAttempted))
    }
  }, [])

  const openBox = () => {
    const gift = getGift()
    console.log('gift', gift)

    setResult(gift)
    // Cookies.set('hasAttempted', JSON.stringify(gift), { expires: 7 })
  }

  return (
    <div className="shkatulka-wrapper">
      <div
        className={`shkatulka shkatulka-${result ? 'open' : 'close'}`}
        onClick={() => openBox()}
      ></div>

      <img className="gift" src={`/gifts/${result}`} alt={'gift'} />
    </div>
  )
}
