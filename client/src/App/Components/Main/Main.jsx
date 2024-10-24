import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import './Main.scss'
import Shkatulka from '../Shkatulka/Shkatulka'

export default function Main() {
  const [selectedBox, setSelectedBox] = useState(null)
  const [fadingBox, setFadingBox] = useState(null)
  const [giftName, setGiftName] = useState(null)
  const [message, setMessage] = useState('Выбери шкатулку и открой её!')
  const [giftInfo, setGiftInfo] = useState(null)

  useEffect(() => {
    const hasAttempted = Cookies.get('dveShkatulki')

    if (hasAttempted) {
      const giftParse = JSON.parse(hasAttempted)
      setGiftInfo(giftParse)
      setGiftName(giftParse.name)
    }
  }, [])

  const chooseBox = position => {
    if (!selectedBox) {
      // Таймер для удаления другой шкатулки после завершения анимации
      setFadingBox(position === 'left' ? 'right' : 'left')
      setTimeout(() => {
        setSelectedBox(position)
        setMessage('Да ладно!?')
      }, 1100)
    }
  }

  return (
    <div className="main-container">
      {!giftInfo ? (
        <div className="title">
          {message}
          <div className={`under-title-${selectedBox ? 'hide' : 'show'}`}>
            у тебя есть только одна попытка
          </div>
        </div>
      ) : (
        <div className="title">
          У тебя была только одна попытка!
          <div className={`under-title-gift`}>Твой приз:</div>
        </div>
      )}
      {!giftInfo ? (
        <div className="shkatulkas-container">
          {!selectedBox || selectedBox === 'left' ? (
            <Shkatulka
              position="left"
              onOpen={() => chooseBox('left')}
              isFading={fadingBox === 'left'}
              setMessage={setMessage}
              setGiftName={setGiftName}
            />
          ) : null}
          {!selectedBox || selectedBox === 'right' ? (
            <Shkatulka
              position="right"
              onOpen={() => chooseBox('right')}
              isFading={fadingBox === 'right'}
              setMessage={setMessage}
              setGiftName={setGiftName}
            />
          ) : null}
        </div>
      ) : (
        <div className="gift-container">
          <img
            className="gift opened"
            src={`/gifts/${giftInfo.url}`}
            alt="gift"
          />
        </div>
      )}
      {giftName && <div className="gift-name">{giftName}</div>}
    </div>
  )
}
